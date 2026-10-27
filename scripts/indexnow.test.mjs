import assert from "node:assert/strict";
import test from "node:test";
import { key, keyLocation, normalizeUrls, submitUrls } from "./indexnow.mjs";

test("submission rejects foreign hosts, credentials, query variants, fragments and empty lists", () => {
  for (const input of [[], ["https://example.com/"], ["//example.com/"],
    ["https://user@www.crescora.ai/"], ["/pricing?campaign=1"], ["/#demo"]]) {
    assert.throws(() => normalizeUrls(input));
  }
  assert.deepEqual(normalizeUrls(["/pricing", "https://www.crescora.ai/pricing"]), ["https://www.crescora.ai/pricing"]);
});

test("missing or wrong live ownership proof prevents transmitting URLs", async () => {
  for (const [status, body] of [[404, ""], [200, "wrong-key"]]) {
    const calls = [];
    await assert.rejects(submitUrls(["/pricing"], async (url) => {
      calls.push(url);
      return new Response(body, { status });
    }), /Deploy/);
    assert.deepEqual(calls, [keyLocation]);
  }
});

test("ownership is checked before one submission and pending validation stays explicit", async () => {
  const calls = [];
  const result = await submitUrls(["/pricing"], async (url, options) => {
    calls.push({ url, options });
    return calls.length === 1 ? new Response(key) : new Response(null, { status: 202 });
  });
  assert.equal(calls.length, 2);
  assert.equal(calls[1].url, "https://api.indexnow.org/indexnow");
  assert.deepEqual(JSON.parse(calls[1].options.body), {
    host: "www.crescora.ai", key, keyLocation, urlList: ["https://www.crescora.ai/pricing"],
  });
  assert.equal(result.status, 202);
  assert.match(result.message, /pending/);
});

test("throttled submissions fail without an automatic retry", async () => {
  let calls = 0;
  await assert.rejects(submitUrls(["/"], async () => {
    calls++;
    return calls === 1 ? new Response(key) : new Response(null, { status: 429 });
  }), /HTTP 429/);
  assert.equal(calls, 2);
});

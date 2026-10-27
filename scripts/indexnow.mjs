import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export const origin = "https://www.crescora.ai";
export const key = "f20fffcdbc934d58abddafc1ab3eeb9a";
export const keyLocation = `${origin}/${key}.txt`;

export function normalizeUrls(inputs) {
  if (!inputs.length) throw new Error("Provide changed page paths or URLs, for example: / /pricing");
  const urls = [...new Set(inputs.map((input) => {
    const url = new URL(input, origin);
    if (url.origin !== origin || url.username || url.password || url.search || url.hash) {
      throw new Error(`Only canonical production URLs without queries or fragments are allowed: ${input}`);
    }
    return url.href;
  }))];
  if (urls.length > 10000) throw new Error("IndexNow accepts at most 10,000 URLs per request.");
  return urls;
}

export async function submitUrls(inputs, fetcher = fetch) {
  const urlList = normalizeUrls(inputs);
  const proof = await fetcher(keyLocation, { redirect: "error", signal: AbortSignal.timeout(15000) });
  if (proof.status !== 200 || (await proof.text()).trim() !== key) {
    throw new Error("IndexNow ownership file is not live or does not match. Deploy it before submitting.");
  }
  const response = await fetcher("https://api.indexnow.org/indexnow", {
    method: "POST",
    redirect: "error",
    signal: AbortSignal.timeout(20000),
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(origin).host, key, keyLocation, urlList }),
  });
  if (![200, 202].includes(response.status)) {
    throw new Error(`IndexNow returned HTTP ${response.status}. Check the response in Bing before retrying; no automatic retry was attempted.`);
  }
  return { status: response.status, count: urlList.length, message: response.status === 202
    ? "Received; ownership validation is pending. This does not confirm indexing."
    : "Submission accepted. This does not confirm indexing." };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const args = process.argv.slice(2);
    const unknownFlags = args.filter((arg) => arg.startsWith("--") && arg !== "--submit");
    if (unknownFlags.length) throw new Error(`Unknown option: ${unknownFlags.join(", ")}`);
    const urls = normalizeUrls(args.filter((arg) => arg !== "--submit"));
    const localKey = await readFile(new URL(`../public/${key}.txt`, import.meta.url), "utf8");
    if (localKey.trim() !== key) throw new Error("Local ownership file does not match the configured key.");
    if (args.includes("--submit")) {
      console.log(JSON.stringify(await submitUrls(urls), null, 2));
    } else {
      console.log(JSON.stringify({ mode: "dry-run", keyLocation, urlList: urls,
        nextStep: "Deploy the ownership file, then repeat with --submit. Send only added, changed, or deleted pages." }, null, 2));
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

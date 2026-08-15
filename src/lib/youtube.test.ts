import assert from "node:assert/strict";
import test from "node:test";

import { buildYoutubeEmbedUrl, buildYoutubeWatchUrl, getYoutubeVideoId } from "@/lib/youtube";

test("youtube helpers normalize supported youtube url formats", () => {
  assert.equal(getYoutubeVideoId("dQw4w9WgXcQ"), "dQw4w9WgXcQ");
  assert.equal(getYoutubeVideoId("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), "dQw4w9WgXcQ");
  assert.equal(getYoutubeVideoId("https://youtu.be/dQw4w9WgXcQ?si=test"), "dQw4w9WgXcQ");
  assert.equal(getYoutubeVideoId("https://www.youtube.com/embed/dQw4w9WgXcQ"), "dQw4w9WgXcQ");
  assert.equal(getYoutubeVideoId("https://www.youtube.com/shorts/dQw4w9WgXcQ"), "dQw4w9WgXcQ");
  assert.equal(getYoutubeVideoId("https://example.com/watch?v=dQw4w9WgXcQ"), null);
  assert.equal(getYoutubeVideoId("not-a-youtube-link"), null);
});

test("youtube helpers build privacy-friendly embed and canonical watch urls", () => {
  assert.equal(
    buildYoutubeEmbedUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
    "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&playsinline=1",
  );
  assert.equal(
    buildYoutubeWatchUrl("https://youtu.be/dQw4w9WgXcQ"),
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  );
  assert.equal(buildYoutubeEmbedUrl(""), null);
  assert.equal(buildYoutubeWatchUrl("invalid"), null);
});

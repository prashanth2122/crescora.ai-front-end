const YOUTUBE_VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

function extractSegmentId(pathname: string, prefix: string) {
  if (!pathname.startsWith(prefix)) {
    return null;
  }

  const [segment] = pathname.slice(prefix.length).split("/");
  return segment ?? null;
}

export function getYoutubeVideoId(input: string | null | undefined) {
  const normalized = input?.trim();

  if (!normalized) {
    return null;
  }

  if (YOUTUBE_VIDEO_ID_PATTERN.test(normalized)) {
    return normalized;
  }

  try {
    const url = new URL(normalized);
    const hostname = url.hostname.replace(/^www\./, "");

    if (hostname === "youtu.be") {
      const [segment] = url.pathname.split("/").filter(Boolean);
      return segment && YOUTUBE_VIDEO_ID_PATTERN.test(segment) ? segment : null;
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com" || hostname === "youtube-nocookie.com") {
      const watchId = url.searchParams.get("v");
      const embedId =
        extractSegmentId(url.pathname, "/embed/") ??
        extractSegmentId(url.pathname, "/shorts/") ??
        extractSegmentId(url.pathname, "/live/");
      const candidate = watchId ?? embedId;

      return candidate && YOUTUBE_VIDEO_ID_PATTERN.test(candidate) ? candidate : null;
    }
  } catch {
    return null;
  }

  return null;
}

export function buildYoutubeEmbedUrl(input: string | null | undefined) {
  const videoId = getYoutubeVideoId(input);

  if (!videoId) {
    return null;
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
}

export function buildYoutubeWatchUrl(input: string | null | undefined) {
  const videoId = getYoutubeVideoId(input);

  if (!videoId) {
    return null;
  }

  return `https://www.youtube.com/watch?v=${videoId}`;
}

import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    return {};
  }

  return {
    onDemandEntries: {
      maxInactiveAge: 15 * 1000,
      pagesBufferLength: 1,
    },
    experimental: {
      // The app has a large route graph, so avoid preloading every entry on dev startup.
      // This lowers initial CPU/RAM usage at the cost of a slightly slower first request per route.
      preloadEntriesOnStart: false,
      // Webpack is slower than Turbopack here, but materially safer on this route-heavy project.
      webpackMemoryOptimizations: true,
    },
  };
}

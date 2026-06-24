import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  const baseConfig: NextConfig = {
    async redirects() {
      return [
        {
          source: "/:path*",
          has: [{ type: "host", value: "crescora.ai" }],
          destination: "https://www.crescora.ai/:path*",
          permanent: true,
          basePath: false,
        },
      ];
    },
  };

  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    return baseConfig;
  }

  return {
    ...baseConfig,
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

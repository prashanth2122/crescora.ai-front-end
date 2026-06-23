/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";

import {
  ANALYTICS_ENABLED,
  GOOGLE_ANALYTICS_ID,
} from "@/lib/analytics";

const isDebugMode = process.env.NODE_ENV !== "production";

export function GoogleTag() {
  if (!ANALYTICS_ENABLED) {
    return null;
  }

  return (
    <>
      <Script id="google-tag-stub" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
        `}
      </Script>
      <Script
        id="google-tag-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-config" strategy="afterInteractive">
        {`
          window.gtag('js', new Date());
          window.gtag('config', '${GOOGLE_ANALYTICS_ID}', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            debug_mode: ${isDebugMode ? "true" : "false"}
          });
        `}
      </Script>
    </>
  );
}

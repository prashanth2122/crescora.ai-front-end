import Script from "next/script";

import {
  ANALYTICS_ENABLED,
  CONTACT_PAGE_GOOGLE_ADS_CONVERSION_ENABLED,
  CONTACT_PAGE_GOOGLE_ADS_CONVERSION_ID,
  CONTACT_PAGE_GOOGLE_ADS_ENABLED,
  CONTACT_PAGE_GOOGLE_ADS_ID,
} from "@/lib/analytics";

export function ContactGoogleTag() {
  if (!CONTACT_PAGE_GOOGLE_ADS_ENABLED) {
    return null;
  }

  if (!ANALYTICS_ENABLED) {
    return (
      <>
        <Script
          id="contact-google-tag-script"
          src={`https://www.googletagmanager.com/gtag/js?id=${CONTACT_PAGE_GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="contact-google-tag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
            window.gtag('js', new Date());
            window.gtag('config', '${CONTACT_PAGE_GOOGLE_ADS_ID}');
          `}
        </Script>
        {CONTACT_PAGE_GOOGLE_ADS_CONVERSION_ENABLED ? (
          <Script id="contact-google-tag-conversion" strategy="afterInteractive">
            {`
              window.gtag('event', 'conversion', {
                send_to: '${CONTACT_PAGE_GOOGLE_ADS_CONVERSION_ID}'
              });
            `}
          </Script>
        ) : null}
      </>
    );
  }

  return (
    <>
      <Script id="contact-google-tag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
          window.gtag('config', '${CONTACT_PAGE_GOOGLE_ADS_ID}');
        `}
      </Script>
      {CONTACT_PAGE_GOOGLE_ADS_CONVERSION_ENABLED ? (
        <Script id="contact-google-tag-conversion" strategy="afterInteractive">
          {`
            window.gtag('event', 'conversion', {
              send_to: '${CONTACT_PAGE_GOOGLE_ADS_CONVERSION_ID}'
            });
          `}
        </Script>
      ) : null}
    </>
  );
}

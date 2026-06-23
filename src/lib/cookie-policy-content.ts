import type { LegalPageData } from "@/lib/site-content";

export const cookiePolicyContent = {
  metadata: {
    title: "Cookie Policy | Crescora Flow",
    description:
      "Understand how Crescora Flow uses cookies and similar technologies for authentication, security, preferences, analytics, performance, and marketing.",
  },
  hero: {
    eyebrow: "Legal",
    title: "Cookie Policy",
    description:
      "This Cookie Policy explains how Crescora AI, operating as Crescora Flow and Crescora AI, uses cookies and similar technologies on https://crescora.ai, our application, dashboard, web widget, and related services.",
  },
  dateLabel: "Effective date",
  updatedOn: "23-June 2026",
  sections: [
    {
      title: "1. What Are Cookies?",
      paragraphs: [
        "Cookies are small text files stored on your device when you visit a website or use an online service. They help websites remember information about your visit, keep you signed in, protect accounts, improve performance, and understand how services are used.",
        "We may also use similar technologies such as local storage, pixels, SDKs, tags, and device identifiers.",
      ],
    },
    {
      title: "2. Why We Use Cookies",
      paragraphs: ["We use cookies and similar technologies to:"],
      bullets: [
        "Keep users signed in securely.",
        "Protect accounts, sessions, and workspaces.",
        "Remember preferences such as theme, region, or workspace context.",
        "Improve website and app performance.",
        "Measure page views, navigation intent, scroll depth, form progression, submissions, and web performance on the marketing site.",
        "Understand product usage and improve user experience.",
        "Detect errors, abuse, fraud, or suspicious activity.",
        "Measure marketing or campaign performance where permitted.",
      ],
    },
    {
      title: "3. Types of Cookies We Use",
      paragraphs: ["The main categories we may use are:"],
      bullets: [
        "Strictly necessary cookies: Required for the website and application to function. They support login, authentication, security, session management, CSRF protection, load balancing, and workspace access.",
        "Preference cookies: Remember settings such as language, theme, layout, workspace context, or previously selected preferences.",
        "Analytics and performance cookies: Help us understand how users interact with our website and product, which pages are visited, which CTAs or routes lead to contact intent, how far visitors scroll, how the lead form is used, and where errors or performance issues occur. We use this information to improve the product, reliability, onboarding, and user experience.",
        "Security and abuse prevention cookies: Help detect suspicious login attempts, bot abuse, spam, fraud, excessive requests, and unauthorized activity.",
        "Marketing cookies: If enabled, help measure campaigns, understand referral sources, and show relevant product communication. We do not use marketing cookies where consent is required unless appropriate consent has been collected.",
      ],
    },
    {
      title: "4. Example Cookie Categories",
      paragraphs: ["Final cookie names should be confirmed through a real cookie audit before launch."],
      tables: [
        {
          caption: "Example cookie categories",
          headers: ["Category", "Purpose", "Example duration"],
          rows: [
            ["Essential", "Login, session, CSRF, workspace routing", "Session to 12 months"],
            ["Security", "Abuse prevention, fraud detection, login protection", "Session to 12 months"],
            ["Preferences", "Theme, language, workspace preferences", "6 to 12 months"],
            ["Analytics", "Product usage and performance measurement", "1 to 24 months"],
            ["Marketing", "Campaign measurement and referral attribution", "1 to 12 months"],
          ],
        },
      ],
    },
    {
      title: "5. Third-Party Cookies",
      paragraphs: [
        "Some cookies may be set by third-party providers that support hosting, analytics, payments, customer support, security, email, advertising, or embedded content.",
        "The public marketing site currently uses Google tag / Google Analytics for website analytics and lead-funnel measurement.",
        "Third-party providers may process cookie data according to their own privacy and cookie policies.",
      ],
    },
    {
      title: "6. Managing Cookies",
      paragraphs: ["You can control cookies through:"],
      bullets: [
        "Browser settings.",
        "Device settings.",
        "Our cookie banner or preference center, where available.",
        "Third-party opt-out tools where applicable.",
        "If you disable certain cookies, some features may not work correctly, including login, workspace access, checkout, dashboard preferences, analytics, or embedded web chat.",
      ],
    },
    {
      title: "7. Cookie Consent",
      paragraphs: [
        "The checked-in marketing site does not currently include a cookie banner or preference center.",
        "Browser settings are the current control surface unless and until a consent tool is added for jurisdictions or deployments that require consent-gated analytics.",
      ],
    },
    {
      title: "8. Local Storage and Similar Technologies",
      paragraphs: [
        "We may use local storage or similar browser storage to support app state, temporary preferences, widget sessions, workspace context, and performance.",
        "Local storage may remain on your device until cleared by the app, browser, or user.",
      ],
    },
    {
      title: "9. Updates to this Cookie Policy",
      paragraphs: [
        "We may update this Cookie Policy when we add, remove, or change cookies, analytics tools, marketing tools, or platform features.",
      ],
    },
    {
      title: "10. Contact",
      paragraphs: ["For cookie or privacy questions, contact:"],
      bullets: ["Crescora AI", "Email: support@crescora.ai"],
    },
  ],
} as const satisfies LegalPageData;

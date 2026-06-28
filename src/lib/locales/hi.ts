import type { LocaleCopy } from "@/lib/locales";

const productName = "FLOW by Crescora AI";

export const hiLocaleCopy: LocaleCopy = {
  site: {
    seoTitle: "FLOW के लिए Hindi SEO Foundation",
    description:
      "FLOW by Crescora AI ग्राहक पूछताछ को booked calls, स्पष्ट follow-ups, और completed projects में बदलने में मदद करता है.",
  },
  language: {
    label: "भाषा",
    current: "हिन्दी",
    switchTo: "अंग्रेज़ी में देखें",
  },
  header: {
    openMenuLabel: "नेविगेशन मेनू खोलें",
    closeMenuLabel: "नेविगेशन मेनू बंद करें",
    closeOverlayLabel: "मेनू ओवरले बंद करें",
    bookCallLabel: "कॉल बुक करें",
    whatsappLabel: "WhatsApp पर चैट करें",
    supportWidgetLabel: "सपोर्ट",
    emailLabel: "ईमेल",
    callLabel: "कॉल",
    openSupportWidgetLabel: "सपोर्ट मेनू खोलें",
    closeSupportWidgetLabel: "सपोर्ट मेनू बंद करें",
  },
  footer: {
    title: `${productName} ग्राहक बातचीत को ऑटोमेटेड बिज़नेस नतीजों में बदलता है.`,
    intro:
      "भारतीय व्यवसायों के लिए बनाया गया है जो पूछताछ, बुकिंग, फ़ॉलो-अप, सपोर्ट, भुगतान और संचालन में व्यावहारिक ऑटोमेशन चाहते हैं.",
    allRightsReserved: "सर्वाधिकार सुरक्षित.",
    companyReferenceLabel: "कंपनी संदर्भ:",
    productLabel: "प्रोडक्ट:",
  },
  navigation: [
    { label: "यह कैसे काम करता है", href: "/platform" },
    { label: "इंडस्ट्रीज़", href: "/industries" },
    { label: "समाधान", href: "/solutions" },
    { label: "उपयोग के मामले", href: "/use-cases" },
    { label: "मूल्य निर्धारण", href: "/pricing" },
    { label: "ब्लॉग", href: "/blog" },
    { label: "ट्रस्ट", href: "/trust" },
    { label: "प्रूफ", href: "/resources" },
  ],
  footerGroups: [
    {
      title: "प्रोडक्ट",
      links: [
        { label: "यह कैसे काम करता है", href: "/platform" },
        { label: "समाधान", href: "/solutions" },
        { label: "वर्कफ़्लो", href: "/workflows" },
        { label: "टेम्पलेट", href: "/templates" },
        { label: "मूल्य निर्धारण", href: "/pricing" },
        { label: "उपयोग के मामले", href: "/use-cases" },
      ],
    },
    {
      title: "इंडस्ट्रीज़",
      links: [
        { label: "अस्पताल", href: "/industries/hospitals" },
        { label: "क्लिनिक", href: "/industries/clinics" },
        { label: "शिक्षा", href: "/industries/education" },
        { label: "रियल एस्टेट", href: "/industries/real-estate" },
        { label: "सपोर्ट टीम", href: "/industries/support-teams" },
        { label: "सेवा व्यवसाय", href: "/industries/service-businesses" },
      ],
    },
    {
      title: "कंपनी",
      links: [
        { label: "हमारे बारे में", href: "/about" },
        { label: "संपर्क", href: "/contact" },
        { label: "ब्लॉग", href: "/blog" },
        { label: "पायलट प्रोग्राम", href: "/proof" },
      ],
    },
    {
      title: "कानूनी",
      links: [
        { label: "गोपनीयता नीति", href: "/privacy" },
        { label: "सेवा की शर्तें", href: "/terms" },
        { label: "कुकी नीति", href: "/cookies" },
        { label: "स्वीकार्य उपयोग नीति", href: "/acceptable-use" },
      ],
    },
  ],
  ctas: {
    bookProjectDemo: { label: "फ्री डेमो बुक करें", href: "/contact" },
    requestScopeCall: { label: "मेरे वर्कफ़्लो पर चर्चा करें", href: "/contact" },
    talkToSales: { label: "सेल्स से बात करें", href: "/contact" },
    viewSolutions: { label: "समाधान देखें", href: "/solutions" },
    viewBlog: { label: "ब्लॉग देखें", href: "/blog" },
    viewTemplates: { label: "टेम्पलेट देखें", href: "/templates" },
    seePricing: { label: "मूल्य देखें", href: "/pricing" },
  },
  pageActions: {
    openLocaleHub: "लोकल हब खोलें",
    openSolutionPage: "समाधान पेज खोलें",
    openArticle: "लेख खोलें",
    openComparePage: "तुलना पेज खोलें",
    openTemplate: "टेम्पलेट खोलें",
    openWorkflowPage: "वर्कफ़्लो पेज खोलें",
    openIndustryPage: "इंडस्ट्री पेज खोलें",
    openStateHub: "स्टेट हब खोलें",
  },
};

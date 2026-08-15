export const productImageDimensions = {
  "/product-images/agent_dashboard.png": {
    width: 9394,
    height: 7783,
  },
  "/product-images/automation_cards.png": {
    width: 7677,
    height: 5402,
  },
  "/product-images/channels_integration.png": {
    width: 7680,
    height: 4320,
  },
  "/product-images/flow_builder.png": {
    width: 11520,
    height: 6480,
  },
  "/product-images/quality_metrics check.png": {
    width: 7682,
    height: 10081,
  },
  "/product-images/service_integration.png": {
    width: 7692,
    height: 10806,
  },
} as const;

export const defaultProductImageDimensions = {
  width: 1600,
  height: 900,
} as const;

export function getProductImageDimensions(src: string) {
  return productImageDimensions[src as keyof typeof productImageDimensions] ?? defaultProductImageDimensions;
}

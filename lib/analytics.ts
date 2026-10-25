export type AnalyticsProperties = Record<string, string | number | boolean>;

export function trackEvent(name: string, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined") return;

  const win = window as typeof window & {
    dataLayer?: Array<unknown>;
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: AnalyticsProperties }) => void;
  };

  win.dataLayer?.push({ event: name, ...properties });
  win.gtag?.("event", name, properties);
  win.plausible?.(name, { props: properties });
  window.dispatchEvent(new CustomEvent("slyxup:analytics", { detail: { name, properties } }));
}

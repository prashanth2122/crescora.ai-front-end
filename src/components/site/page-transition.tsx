"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    const id = window.setTimeout(() => setReady(true), 20);
    return () => {
      window.clearTimeout(id);
      media.removeEventListener("change", update);
    };
  }, []);

  const active = ready || reducedMotion;
  const duration = reducedMotion ? "0ms" : "520ms";

  return (
    <div
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0px)" : "translateY(12px)",
        filter: active ? "blur(0px)" : "blur(6px)",
        transitionProperty: "opacity, transform, filter",
        transitionDuration: duration,
        transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}


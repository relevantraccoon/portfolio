import { useEffect } from "react";

/**
 * Mirrors the mobile browser URL-bar overlay height into the
 * --url-bar-inset CSS custom property on <html>. Only non-zero when
 * the URL bar overlays the viewport (iOS Safari / Samsung Chrome in
 * landscape), so CSS can offset content without wasting space elsewhere.
 */
export const useUrlBarInset = (): void => {
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const root = document.documentElement;

    const update = () => {
      const inset = Math.max(0, Math.round(vv.offsetTop));
      root.style.setProperty("--url-bar-inset", `${inset}px`);
    };

    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, []);
};

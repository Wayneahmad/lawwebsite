import { useEffect, useState } from "react";

/** Returns one of: "mobile" (<640), "tablet" (640–1023), "desktop" (>=1024) */
export default function useViewportBucket() {
  const get = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 0;
    if (w >= 1024) return "desktop";
    if (w >= 640) return "tablet";
    return "mobile";
  };

  const [bucket, setBucket] = useState(get);

  useEffect(() => {
    let raf;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setBucket((prev) => {
          const next = get();
          return prev === next ? prev : next;
        });
      });
    };
    window.addEventListener("resize", onResize, { passive: true });
    onResize(); // first paint
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return bucket;
}

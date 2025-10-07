import { useEffect, useState } from "react";

/** Returns true when viewport >= minPx (default 1024 = “lg”). */
export default function useBreakpoint(minPx = 1024) {
  const [up, setUp] = useState(
    typeof window !== "undefined" ? window.innerWidth >= minPx : false
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width:${minPx}px)`);
    const onChange = () => setUp(mq.matches);
    // first paint + subscribe
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [minPx]);

  return up;
}

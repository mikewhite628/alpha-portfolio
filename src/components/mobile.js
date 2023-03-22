import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(null);

  const toggleMobile = () => {
    if (isBrowser) {
      if (window.innerWidth >= 1024) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
      console.log(isMobile);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => toggleMobile());
  });

  useEffect(() => {
    toggleMobile();
  });

  return isMobile;
}

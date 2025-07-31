"use client";

import { useEffect } from "react";

// Window interface extend karte hain yahan pe
declare global {
  interface Window {
    initCustomScripts?: () => void;
  }
}

export default function AnimationInit() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.initCustomScripts === "function") {
      window.initCustomScripts();
    }
  }, []);

  return null;
}

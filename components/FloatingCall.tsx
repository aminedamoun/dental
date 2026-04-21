"use client";

import { useEffect, useState } from "react";
import { IconPhone } from "./Icons";

export default function FloatingCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="tel:+38640515426"
      aria-label="Call us"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-brand-gold pl-4 pr-5 py-3 text-brand-green shadow-[0_10px_40px_-10px_rgba(197,165,114,0.7)] transition-all duration-500 hover:bg-brand-gold-light hover:shadow-[0_15px_45px_-10px_rgba(197,165,114,0.9)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green">
        <IconPhone className="h-5 w-5 text-brand-gold" />
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-green/30" />
      </span>
      <span className="hidden text-[11px] uppercase tracking-[0.25em] sm:inline">
        Call us
      </span>
    </a>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Brand = { name: string; src: string };

// Real brand logos — dropped in from public/brands
const brands: Brand[] = [
  { name: "Straumann", src: "/brands/Straumann.webp" },
  { name: "Nobel Biocare", src: "/brands/nobelbiocare.webp" },
  { name: "Ankylos", src: "/brands/Ankylos.webp" },
  { name: "Dentsply Sirona", src: "/brands/DentsplySirona.webp" },
  { name: "Ivoclar", src: "/brands/Ivoclar.webp" },
  { name: "Kulzer", src: "/brands/kulzer.webp" },
  { name: "Zhermack", src: "/brands/zhermack.webp" },
  { name: "GC", src: "/brands/gc.webp" },
  { name: "VOCO", src: "/brands/voco.webp" },
  { name: "3M", src: "/brands/3m.webp" },
  { name: "W&H", src: "/brands/wgh.webp" },
  { name: "EMS", src: "/brands/ems.webp" },
  { name: "Dürr Dental", src: "/brands/durrdental.webp" },
  { name: "Euronda", src: "/brands/euronda.webp" },
  { name: "KaVo", src: "/brands/kavo.webp" },
  { name: "Medit", src: "/brands/MEDIT.webp" },
  { name: "Formlabs", src: "/brands/formlabs.webp" },
  { name: "VITA", src: "/brands/vita.webp" },
];

const track = [...brands, ...brands];

export default function BrandLogos() {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = performance.now();
    let pos = el.scrollLeft;
    const speed = 40;

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused) {
        pos += speed * dt;
        const half = el.scrollWidth / 2;
        if (half > 0 && pos >= half) pos -= half;
        el.scrollLeft = pos;
      } else {
        pos = el.scrollLeft;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section className="bg-brand-cream py-5 lg:py-6">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-cream to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-cream to-transparent md:w-40" />

        <div
          ref={scroller}
          className="no-scrollbar flex items-center gap-12 overflow-x-auto px-6 lg:gap-16 lg:px-10"
          aria-label="Trusted dental technology partners"
        >
          {track.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="flex h-9 shrink-0 items-center md:h-10"
              title={b.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.src}
                alt={b.name}
                loading="lazy"
                draggable={false}
                className="h-full w-auto max-w-[130px] object-contain opacity-75 transition-opacity duration-500 hover:opacity-100 md:max-w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

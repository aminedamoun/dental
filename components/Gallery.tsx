"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Case = {
  src: string;
  title: string;
};

const cases: Case[] = [
  { src: "/before-after/case-1.webp", title: "Ceramic Veneers" },
  { src: "/before-after/case-2.webp", title: "Composite Bonding" },
  { src: "/before-after/case-3.webp", title: "Spark Aligner + Whitening" },
  { src: "/before-after/case-4.webp", title: "Crown Restoration" },
  { src: "/before-after/case-5.webp", title: "Closing Diastema with Veneers" },
  { src: "/before-after/case-6.webp", title: "Complete Smile Design" },
  { src: "/before-after/case-7.webp", title: "Whitening + Bonding" },
  { src: "/before-after/case-8.webp", title: "Invisalign Alignment" },
  { src: "/before-after/case-9.webp", title: "Gum Contouring + Veneers" },
  { src: "/before-after/case-10.webp", title: "Implant + Crown" },
  { src: "/before-after/case-11.webp", title: "Anterior Veneers" },
  { src: "/before-after/case-12.webp", title: "Full Smile Rehabilitation" },
];

// Duplicate for seamless loop
const track = [...cases, ...cases];

export default function Gallery() {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    let last = performance.now();
    let pos = el.scrollLeft;
    const speed = 55;

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
    <section id="gallery" className="bg-white pt-24 pb-10 lg:pt-32 lg:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Results"
          title="Smiles we're proud of"
          subtitle="Every case is a story of trust, precision, and shared joy at the reveal of a new smile."
        />
      </div>

      <div
        className="relative mt-14 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <Reveal>
          <div
            ref={scroller}
            className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-4 lg:px-10"
            aria-label="Before and after smile transformations"
          >
            {track.map((c, i) => (
              <article
                key={`${c.src}-${i}`}
                className="group relative w-[70%] shrink-0 sm:w-[40%] lg:w-[26%]"
              >
                <div className="relative overflow-hidden bg-black">
                  {/* Full before/after image (already composited, black background) */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.src}
                    alt={`${c.title} — before and after`}
                    loading="lazy"
                    className="block h-auto w-full select-none"
                    draggable={false}
                  />
                  {/* Before / After labels over the halves */}
                  <span className="absolute left-3 top-3 bg-white/90 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-brand-ink">
                    Before
                  </span>
                  <span className="absolute right-3 top-3 bg-brand-gold px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-brand-green">
                    After
                  </span>
                  {/* Thin gold divider line down the middle */}
                  <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-brand-gold/40" />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="font-serif text-xl font-light text-brand-ink">
                    {c.title}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-brand-gold">
                    {String((i % cases.length) + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

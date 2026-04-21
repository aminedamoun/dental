"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 60;
const DURATION_MS = 2600;

type Part = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  showAt: number; // progress threshold (0..1) when the part becomes visible
};

const parts: Part[] = [
  {
    number: "01",
    title: "Crown",
    subtitle: "The visible tooth",
    description:
      "A custom-shaped, hand-shaded ceramic crown designed to match your natural teeth exactly. It is the part you see when you smile.",
    showAt: 0.18,
  },
  {
    number: "02",
    title: "Abutment",
    subtitle: "The connector",
    description:
      "A precision-milled abutment links the crown to the implant. It transfers chewing forces evenly and holds the crown in perfect position.",
    showAt: 0.5,
  },
  {
    number: "03",
    title: "Implant",
    subtitle: "The titanium root",
    description:
      "A Straumann titanium post that fuses with your jawbone through osseointegration. Once integrated, it is as stable as a natural root — often for life.",
    showAt: 0.82,
  },
];

export default function ImplantReveal() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [frameIdx, setFrameIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [started, setStarted] = useState(false);

  // Preload all frames once
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let loadedCount = 0;
    const done = () => {
      loadedCount++;
      if (loadedCount === FRAME_COUNT) setLoaded(true);
    };
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/implant/f${String(i).padStart(2, "0")}.webp`;
      img.onload = done;
      img.onerror = done;
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  // Fire animation when section reaches the viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Play the animation
  useEffect(() => {
    if (!started || !loaded) return;
    let raf = 0;
    const start = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      const eased = easeOut(t);
      const idx = Math.min(
        FRAME_COUNT - 1,
        Math.floor(eased * (FRAME_COUNT - 1))
      );
      setFrameIdx(idx);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, loaded]);

  // Draw current frame to canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || !img.naturalWidth) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if (canvas.width !== cssW * dpr || canvas.height !== cssH * dpr) {
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const ratio = Math.min(cssW / iw, cssH / ih);
    const dw = iw * ratio;
    const dh = ih * ratio;
    ctx.drawImage(img, (cssW - dw) / 2, (cssH - dh) / 2, dw, dh);
  }, [frameIdx, loaded]);

  const progress = frameIdx / (FRAME_COUNT - 1);

  return (
    <section
      ref={wrapperRef}
      className="bg-brand-cream py-24 lg:py-32"
      aria-label="Anatomy of a dental implant"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-10">
        {/* Canvas */}
        <div className="relative order-2 flex h-[60vh] items-center justify-center lg:order-1 lg:h-[80vh]">
          <canvas
            ref={canvasRef}
            className="h-full w-full"
            aria-hidden="true"
          />
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center text-[11px] uppercase tracking-[0.3em] text-brand-mute">
              Loading…
            </div>
          )}
        </div>

        {/* Text */}
        <div className="order-1 flex flex-col lg:order-2">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-brand-gold">
            <span className="h-px w-6 bg-brand-gold" />
            Implant anatomy
          </span>
          <h2 className="mt-5 font-serif text-3xl font-light leading-[1.1] text-brand-ink md:text-4xl lg:text-5xl">
            A precision-engineered system.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-brand-ink/75 md:text-base">
            A Straumann dental implant is three components working in perfect
            harmony to restore a missing tooth — each visible as the piece
            opens.
          </p>

          <div className="mt-8 space-y-5">
            {parts.map((p) => {
              const visible = progress >= p.showAt;
              return (
                <div
                  key={p.title}
                  className={`border-l-2 pl-5 transition-all duration-700 ease-out ${
                    visible
                      ? "border-brand-gold translate-y-0 opacity-100"
                      : "border-brand-ink/5 translate-y-3 opacity-0"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-serif text-[11px] tracking-[0.3em] text-brand-gold">
                      {p.number}
                    </span>
                    <h3 className="font-serif text-xl font-light text-brand-green">
                      {p.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-brand-mute">
                      {p.subtitle}
                    </span>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-brand-ink/80">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

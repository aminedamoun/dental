"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Review = {
  name: string;
  initial: string;
  date: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Ana Kovačič",
    initial: "A",
    date: "2 weeks ago",
    rating: 5,
    text: "I finally have the smile I've always wanted. The attention to detail on my veneers is unreal — they look completely natural. Dr. Benko and her team made me feel at home from the first consultation.",
  },
  {
    name: "Marko Horvat",
    initial: "M",
    date: "1 month ago",
    rating: 5,
    text: "Getting implants was something I dreaded for years. Dr. Knehtl walked me through every step with calm and clarity. Painless, precise, and the result is flawless. Worth every cent.",
  },
  {
    name: "Nika Novak",
    initial: "N",
    date: "3 weeks ago",
    rating: 5,
    text: "The Spark aligners transformed my smile in less than a year. No metal, no discomfort, almost invisible. The digital planning they showed me upfront gave me complete confidence.",
  },
  {
    name: "Luka Zupan",
    initial: "L",
    date: "2 months ago",
    rating: 5,
    text: "Best dental clinic in Slovenia. The space feels more like a luxury spa than a clinic. Professional, modern, and the results speak for themselves. I travel from Ljubljana and it's worth it.",
  },
  {
    name: "Maja Kranjc",
    initial: "M",
    date: "5 days ago",
    rating: 5,
    text: "I came in for whitening and left with a full smile consultation. They listened to what I actually wanted — not what they could upsell. That kind of honesty is rare these days.",
  },
  {
    name: "Tim Vidmar",
    initial: "T",
    date: "3 months ago",
    rating: 5,
    text: "From first visit to final result — ten out of ten. The team combines real technical skill with genuine warmth. My wife booked her consultation the following week.",
  },
];

const track = [...reviews, ...reviews];

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${filled ? "fill-brand-gold" : "fill-brand-ink/15"}`}
      aria-hidden="true"
    >
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6z" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} filled={i < count} />
      ))}
    </div>
  );
}

export default function Testimonials() {
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
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Reviews"
          title="What our patients say"
          subtitle="Verified reviews from our Google Business profile. Real stories, real results."
        />

        {/* Overall rating card */}
        <Reveal delay={200}>
          <div className="mx-auto mt-14 flex max-w-xl items-stretch justify-between gap-6 border border-brand-ink/10 bg-brand-cream/50 px-8 py-6">
            <div className="flex flex-col items-center justify-center">
              <div className="font-serif text-5xl font-light leading-none text-brand-green">
                4.9
              </div>
              <div className="mt-2">
                <Stars count={5} />
              </div>
            </div>
            <div className="w-px bg-brand-ink/10" />
            <div className="flex flex-1 flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-brand-gold">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-brand-gold/60 font-serif text-[11px] leading-none text-brand-gold">
                  G
                </span>
                Google Reviews
              </div>
              <div className="mt-2 text-[14px] text-brand-ink/80">
                Based on 200+ verified reviews
              </div>
              <a
                href="#"
                className="mt-2 inline-block text-[11px] uppercase tracking-[0.2em] text-brand-green underline underline-offset-4 decoration-brand-gold/60 hover:text-brand-gold"
              >
                Read them on Google →
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Single-line horizontal marquee */}
      <div
        className="relative mt-14 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent md:w-32" />

        <div
          ref={scroller}
          className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-6 lg:px-10"
          aria-label="Patient reviews"
        >
          {track.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              className="relative flex w-[85%] shrink-0 flex-col border border-brand-ink/10 bg-white p-8 sm:w-[440px]"
            >
              {/* Google badge */}
              <div className="absolute right-6 top-6 inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-gold/50 font-serif text-[13px] leading-none text-brand-gold">
                G
              </div>

              <div className="flex items-center gap-3">
                <Stars count={r.rating} />
                <span className="text-[11px] uppercase tracking-[0.2em] text-brand-mute">
                  {r.date}
                </span>
              </div>

              <p className="mt-5 flex-1 font-sans text-[15px] leading-[1.7] text-brand-ink/85">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-brand-ink/5 pt-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-green font-serif text-lg text-brand-gold">
                  {r.initial}
                </div>
                <div>
                  <div className="text-[14px] font-medium text-brand-ink">
                    {r.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-brand-mute">
                    Verified · Google
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 text-center lg:px-10">
        <Reveal delay={200}>
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-brand-gold transition-colors hover:text-brand-green"
          >
            <span className="h-px w-8 bg-brand-gold" />
            See all reviews on Google
            <span className="h-px w-8 bg-brand-gold" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

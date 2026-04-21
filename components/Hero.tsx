"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { IconCheck, IconArrowRight } from "./Icons";

const trustBadges = [
  "500+ smiles transformed",
  "Master of Invisible Orthodontics",
  "Straumann implants",
  "Spark aligner",
];

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-36 pb-12 lg:pt-44 lg:pb-16 grain"
    >
      {/* Instant-display poster fills the frame immediately; video plays once it's ready */}
      <div
        className="absolute inset-0 bg-brand-green bg-cover bg-center"
        style={{ backgroundImage: "url(/video/poster.webp)" }}
        aria-hidden="true"
      />
      {/* Background video — fades in over the poster once playable */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero.webm"
        poster="/video/poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Subtle overlays for text legibility — lighter than before so video reads clearly */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      <div className="pointer-events-none absolute left-0 right-0 top-1/3 hidden lg:block">
        <div className="mx-auto h-px w-2/3 max-w-5xl bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />
      </div>
      <div className="pointer-events-none absolute -right-20 top-20 hidden h-80 w-80 rounded-full border border-brand-gold/15 lg:block" />
      <div className="pointer-events-none absolute -left-32 bottom-10 hidden h-96 w-96 rounded-full border border-brand-gold/10 lg:block" />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-brand-gold">
            <span className="h-px w-8 bg-brand-gold" />
            Center of Aesthetic Dentistry · Maribor
            <span className="h-px w-8 bg-brand-gold" />
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-10 font-serif text-5xl font-light leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Your perfect smile
            <br />
            <span className="italic text-brand-gold">starts here</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-lg">
            Aesthetic dentistry with soul and precision. Veneers, invisible
            aligners, whitening, implants — all in one place.
          </p>
        </Reveal>

        {/* Inline appointment form */}
        <Reveal delay={360}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <p className="mb-5 text-[12px] uppercase tracking-[0.3em] text-brand-gold">
              Schedule a free consultation
            </p>
            <div className="flex flex-col gap-3 rounded-full bg-white/5 p-2 ring-1 ring-white/15 backdrop-blur-sm sm:flex-row sm:items-center">
              <input
                name="name"
                type="text"
                required
                placeholder="Full name"
                className="flex-1 rounded-full border-0 bg-transparent px-5 py-3 text-[15px] font-light text-white placeholder-white/50 outline-none focus:ring-1 focus:ring-brand-gold/60 sm:px-6"
              />
              <span className="hidden h-7 w-px bg-white/15 sm:block" />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone number"
                className="flex-1 rounded-full border-0 bg-transparent px-5 py-3 text-[15px] font-light text-white placeholder-white/50 outline-none focus:ring-1 focus:ring-brand-gold/60 sm:px-6"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.28em] text-brand-green transition-all hover:bg-brand-gold-light hover:shadow-[0_10px_30px_rgba(197,165,114,0.35)]"
              >
                {submitted ? "Thank you" : "Submit"}
                <IconArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <p className="mt-3 text-[11px] font-light text-white/40">
              We respond within 24 hours · Your details stay private (GDPR)
            </p>
          </form>
        </Reveal>

        <Reveal delay={480}>
          <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-4 text-[12px] uppercase tracking-[0.18em] text-white/70 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-10">
            {trustBadges.map((b) => (
              <li key={b} className="flex items-center justify-center gap-2">
                <IconCheck className="h-3.5 w-3.5 text-brand-gold" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/15" />
    </section>
  );
}

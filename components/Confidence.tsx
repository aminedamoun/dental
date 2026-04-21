"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const smiles = [
  { src: "/smiles/smile-1.webp", alt: "Radiant smile after veneers" },
  { src: "/smiles/smile-2.webp", alt: "Natural glowing smile" },
  { src: "/smiles/smile-3.webp", alt: "Joyful smile after orthodontics" },
  { src: "/smiles/smile-4.webp", alt: "Confident smile after whitening" },
];

const keywords = [
  "Veneers",
  "Invisible braces",
  "Whitening",
  "Implants",
  "Bonding",
];

function SmileTile({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-[#EFE7DB] to-[#E2D5C1]">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-green/60">
          <span className="font-serif text-4xl tracking-widest">BK</span>
          <span className="text-[10px] uppercase tracking-[0.35em]">
            Smile · 0{index + 1}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EFE7DB]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
      />
    </div>
  );
}

export default function Confidence() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-24 lg:pt-14 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top label */}
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-brand-gold">
              <span className="h-px w-6 bg-brand-gold" />
              Keep smiling
              <span className="h-px w-6 bg-brand-gold" />
            </span>
          </div>
        </Reveal>

        {/* 2-column content */}
        <div className="mt-14 grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — SEO-rich copy */}
          <div className="lg:pr-4">
            <Reveal delay={100}>
              <h2 className="font-serif text-3xl font-light leading-[1.15] text-brand-ink md:text-4xl lg:text-[46px]">
                Dentist Maribor —{" "}
                <span className="italic text-brand-gold">
                  aesthetic, safe, predictable.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-7 flex flex-wrap gap-2">
                {keywords.map((k) => (
                  <li
                    key={k}
                    className="border border-brand-ink/10 bg-brand-cream/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-brand-ink/70"
                  >
                    {k}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 space-y-5 text-[15px] font-light leading-relaxed text-brand-ink/70 md:text-base">
                <p>
                  With us, you are always the center of attention. We listen to
                  your wishes, understand your needs, and together we find the
                  path to the smile you truly desire.
                </p>
                <p>
                  We combine our experience and knowledge with advanced
                  technology to advise you honestly, clearly, and without
                  unnecessary complications. The best results are those
                  achieved together — patient and therapist — with complete
                  trust and cooperation.
                </p>
                <p>
                  Take a look at our before-and-after examples and experience
                  for yourself what{" "}
                  <span className="text-brand-green">
                    aesthetic dentistry with soul and precision
                  </span>{" "}
                  means.
                </p>
                <p>
                  The most beautiful smiles are often the result of thoughtful
                  combinations — from{" "}
                  <strong className="font-normal text-brand-green">
                    dental veneers
                  </strong>
                  ,{" "}
                  <strong className="font-normal text-brand-green">
                    Invisalign
                  </strong>
                  ,{" "}
                  <strong className="font-normal text-brand-green">
                    teeth whitening
                  </strong>
                  , to{" "}
                  <strong className="font-normal text-brand-green">
                    bonding
                  </strong>{" "}
                  and other aesthetic procedures. Every smile is a story in
                  itself — and we are happy to help create yours.
                </p>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-brand-gold" />
                <span className="font-serif text-lg italic text-brand-ink/85">
                  Mihaela Benko &amp; Darjan Knehtl
                </span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — 2×2 smile grid */}
          <div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {smiles.map((s, i) => (
                <Reveal key={s.src} delay={i * 100}>
                  <SmileTile src={s.src} alt={s.alt} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* BE ULTRA CONFIDENT banner */}
        <Reveal delay={500}>
          <div className="mt-20 flex items-center justify-center gap-5 md:mt-24 md:gap-8">
            <span className="h-px flex-1 max-w-[140px] bg-brand-ink/30" />
            <h3 className="font-sans text-3xl font-light uppercase tracking-[0.12em] text-brand-ink sm:text-4xl md:text-5xl lg:text-6xl">
              BE{" "}
              <span className="font-black tracking-tight text-brand-green">
                ULTRA
              </span>{" "}
              CONFI
              <span className="font-black tracking-tight text-brand-gold">
                DENT
              </span>
            </h3>
            <span className="h-px flex-1 max-w-[140px] bg-brand-ink/30" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

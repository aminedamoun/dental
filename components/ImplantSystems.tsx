"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrowRight } from "./Icons";

type Implant = {
  name: string;
  brand: string;
  origin: string;
  material: string;
  surface: string;
  indication: string;
  description: string;
  img: string;
};

const implants: Implant[] = [
  {
    name: "BLX",
    brand: "Straumann",
    origin: "Switzerland",
    material: "Roxolid (Ti-Zr)",
    surface: "SLActive",
    indication: "Immediate placement",
    description:
      "The Swiss benchmark for implantology. Exceptional primary stability in any bone quality, engineered for immediate loading protocols.",
    img: "/implants/implant-1.webp",
  },
  {
    name: "NobelActive",
    brand: "Nobel Biocare",
    origin: "Sweden",
    material: "Grade 4 Titanium",
    surface: "TiUnite",
    indication: "All bone types",
    description:
      "Self-drilling tapered design with progressive thread geometry. Preserves bone and delivers outstanding initial stability — a true all-rounder.",
    img: "/implants/implant-2.webp",
  },
  {
    name: "GM",
    brand: "Neodent",
    origin: "Brazil",
    material: "Grade 4 Titanium",
    surface: "NeoPoros",
    indication: "Versatile daily use",
    description:
      "Grand Morse conical connection for a secure, bacteria-tight seal. A modern system that balances cost, quality, and clinical reliability.",
    img: "/implants/implant-3.webp",
  },
  {
    name: "C/X",
    brand: "Ankylos",
    origin: "Germany",
    material: "Grade 2 Titanium",
    surface: "Cellplus",
    indication: "Long-term stability",
    description:
      "Conical connection with platform switching, proven over three decades. Outstanding long-term crestal bone preservation.",
    img: "/implants/implant-4.webp",
  },
  {
    name: "BLT",
    brand: "Straumann",
    origin: "Switzerland",
    material: "Roxolid (Ti-Zr)",
    surface: "SLActive",
    indication: "All indications",
    description:
      "Bone-level tapered — the reliable Straumann workhorse. Apical tapering for self-guidance, cylindrical coronal for optimal primary stability.",
    img: "/implants/implant-5.webp",
  },
];

const COUNT = implants.length;

function CardImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-serif text-[10px] uppercase tracking-[0.35em] text-brand-mute">
          Implant image
        </span>
      </div>
    );
  }
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      draggable={false}
      className="h-full w-full object-contain drop-shadow-[0_25px_30px_rgba(74,93,82,0.25)]"
    />
  );
}

export default function ImplantSystems() {
  const [active, setActive] = useState(0);
  const current = implants[active];

  const go = (to: number) => setActive(((to % COUNT) + COUNT) % COUNT);
  const prev = () => go(active - 1);
  const next = () => go(active + 1);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Implant Systems"
          title="Five premium systems, one perfect match"
          subtitle="We work exclusively with the world's most trusted implant systems. Switch between them — we recommend the best fit for your anatomy and goals."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* LEFT — stage + controls */}
          <Reveal delay={150}>
            <div>
              <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[460px] lg:h-[560px]">
                {/* Subtle backdrop */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="h-[70%] w-[70%] rounded-full border border-brand-gold/15" />
                  <div className="absolute h-[50%] w-[50%] rounded-full border border-brand-gold/10" />
                </div>
                {/* Floor shadow */}
                <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-3 w-[40%] -translate-x-1/2 rounded-full bg-brand-green/15 blur-xl" />

                {/* Stack all implants, only active visible. Plain fade. */}
                {implants.map((imp, i) => (
                  <div
                    key={imp.name}
                    className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500 ${
                      i === active
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                    aria-hidden={i !== active}
                  >
                    <CardImage src={imp.img} alt={`${imp.brand} ${imp.name}`} />
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous implant"
                  className="inline-flex h-11 w-11 items-center justify-center border border-brand-ink/15 text-brand-ink transition-all hover:border-brand-gold hover:text-brand-gold"
                >
                  <IconArrowRight className="rotate-180" />
                </button>

                <div className="flex items-center gap-3">
                  {implants.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Show implant ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === active
                          ? "w-8 bg-brand-gold"
                          : "w-1.5 bg-brand-ink/20"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next implant"
                  className="inline-flex h-11 w-11 items-center justify-center border border-brand-ink/15 text-brand-ink transition-all hover:border-brand-gold hover:text-brand-gold"
                >
                  <IconArrowRight />
                </button>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — info panel (keyed so it fades on each switch) */}
          <div
            key={`info-${active}`}
            className="animate-[fadeUp_0.5s_ease-out]"
          >
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-brand-gold">
              <span className="h-px w-6 bg-brand-gold" />
              0{active + 1} / 0{COUNT}
            </span>
            <h3 className="mt-5 font-serif text-4xl font-light leading-[1.05] text-brand-ink md:text-5xl">
              {current.brand}{" "}
              <span className="italic text-brand-gold">{current.name}</span>
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-brand-ink/75 md:text-base">
              {current.description}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-brand-ink/10 pt-6">
              {[
                ["Origin", current.origin],
                ["Material", current.material],
                ["Surface", current.surface],
                ["Indication", current.indication],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-brand-gold">
                    {k}
                  </dt>
                  <dd className="mt-2 text-[14px] text-brand-ink/80">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

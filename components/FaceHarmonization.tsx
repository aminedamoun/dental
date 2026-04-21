import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconLeaf, IconSparkle, IconDiamond, IconArrowRight } from "./Icons";

const services = [
  {
    title: "Hyaluronic Fillers",
    desc: "Natural filling of facial lines and restoration of volume.",
    icon: IconLeaf,
    img: "/face/fillers.webp",
  },
  {
    title: "Botulinum Toxin",
    desc: "Smoothing of expression lines for a fresh, well-rested look.",
    icon: IconSparkle,
    img: "/face/botulinum.webp",
  },
  {
    title: "PRP Rejuvenation",
    desc: "Rejuvenation with your own blood plasma for natural regeneration.",
    icon: IconDiamond,
    img: "/face/prp.webp",
  },
];

export default function FaceHarmonization() {
  return (
    <section id="face" className="bg-brand-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Face Harmonization"
          title="Beauty beyond the smile"
          subtitle="Subtle aesthetic treatments that enhance natural features and restore facial harmony."
        />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 100}>
                <article className="group flex h-full flex-col bg-white transition-all hover:shadow-[0_25px_60px_-20px_rgba(74,93,82,0.25)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-8 py-10">
                    <div className="inline-flex h-12 w-12 items-center justify-center border border-brand-gold/40 text-brand-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-light leading-snug text-brand-ink">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[15px] font-light leading-relaxed text-brand-ink/65">
                      {s.desc}
                    </p>
                    <a
                      href="#contact"
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-[11px] uppercase tracking-[0.3em] text-brand-gold transition-colors hover:text-brand-green"
                    >
                      Learn more
                      <IconArrowRight className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

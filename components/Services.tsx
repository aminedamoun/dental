import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  IconArrowRight,
  IconTooth,
  IconSparkle,
  IconAligner,
  IconImplant,
  IconBrush,
  IconCrown,
} from "./Icons";

const services = [
  {
    title: "Veneers",
    desc: "One of the finest methods for transforming a smile. Thin ceramic veneers for a flawless look.",
    icon: IconTooth,
    img: "/services/veneers.webp",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional whitening at home or in office. Predictable and safe results.",
    icon: IconSparkle,
    img: "/services/whitening.webp",
  },
  {
    title: "Spark Invisible Aligner",
    desc: "Comfortable and effective tooth alignment with the invisible Spark system.",
    icon: IconAligner,
    img: "/services/spark.webp",
  },
  {
    title: "Dental Implants",
    desc: "Straumann implants to replace missing teeth. Premium quality and lasting results.",
    icon: IconImplant,
    img: "/services/implants.webp",
  },
  {
    title: "Composite Bonding",
    desc: "Composite materials to enhance or reshape the appearance of your teeth.",
    icon: IconBrush,
    img: "/services/bonding.webp",
  },
  {
    title: "Crowns & Prosthetics",
    desc: "Durable crowns bonded to a prepared tooth or implant for a natural result.",
    icon: IconCrown,
    img: "/services/crowns.webp",
  },
];

export default function Services() {
  return (
    <section id="treatments" className="bg-brand-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Our Treatments"
          title="Complete care for your smile"
          subtitle="We combine aesthetic and functional dentistry in a space that inspires confidence."
        />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <article className="group h-full bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(74,93,82,0.25)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                    <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center bg-brand-green text-brand-gold shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex h-[calc(100%-75%)] flex-col px-8 py-8">
                    <h3 className="font-serif text-2xl font-light leading-snug text-brand-ink">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[15px] font-light leading-relaxed text-brand-ink/65">
                      {s.desc}
                    </p>
                    <a
                      href="#contact"
                      className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-brand-gold transition-colors hover:text-brand-green"
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

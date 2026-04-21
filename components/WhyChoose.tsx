import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  IconHeart,
  IconMonitor,
  IconAward,
  IconDiamond,
  IconSparkle,
} from "./Icons";

const features = [
  {
    icon: IconHeart,
    title: "All in one place",
    desc: "We combine expertise across dental specialties for a complete, cohesive result.",
  },
  {
    icon: IconMonitor,
    title: "Digital planning",
    desc: "Advanced software for precise diagnostics and treatment planning.",
  },
  {
    icon: IconAward,
    title: "Master of Invisible Orthodontics",
    desc: "The only practitioner in Slovenia with this international title from Padua, Italy.",
  },
  {
    icon: IconDiamond,
    title: "Premium materials",
    desc: "Straumann implants and the Spark invisible aligner system.",
  },
  {
    icon: IconSparkle,
    title: "Proven results",
    desc: "Hundreds of successful before-and-after cases that speak for themselves.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-brand-green py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full border border-brand-gold/10" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full border border-brand-gold/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Why Benko & Knehtl"
          title="Why choose us?"
          subtitle="Five reasons our patients trust us with their smiles."
          tone="dark"
        />

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group h-full border-t border-brand-gold/25 pt-8 transition-colors hover:border-brand-gold">
                  <div className="inline-flex h-14 w-14 items-center justify-center border border-brand-gold/40 text-brand-gold transition-all group-hover:border-brand-gold group-hover:bg-brand-gold/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-light text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-light leading-relaxed text-white/65">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={features.length * 80}>
            <div className="flex h-full items-center border-t border-brand-gold/25 pt-8">
              <blockquote className="font-serif text-xl italic font-light leading-relaxed text-brand-gold">
                &ldquo;Every smile deserves an approach that unites science with a
                feeling for beauty.&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

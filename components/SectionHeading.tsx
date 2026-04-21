import Reveal from "./Reveal";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: Props) {
  const isDark = tone === "dark";
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-brand-gold`}
        >
          <span className="h-px w-6 bg-brand-gold" />
          {label}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2
          className={`mt-6 font-serif text-4xl font-light leading-[1.1] md:text-5xl ${
            isDark ? "text-white" : "text-brand-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={200}>
          <p
            className={`mt-5 text-base font-light leading-relaxed md:text-lg ${
              isDark ? "text-white/70" : "text-brand-ink/70"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal delay={260}>
        <div
          className={`mt-8 gold-divider ${align === "center" ? "" : "ml-0"}`}
        />
      </Reveal>
    </div>
  );
}

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-brand-gold">
                <span className="h-px w-6 bg-brand-gold" />
                About Us
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-brand-ink md:text-5xl">
                Mihaela Benko <span className="text-brand-gold">&amp;</span> Darjan Knehtl
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-base font-light leading-relaxed text-brand-ink/70 md:text-lg">
                With us, you are always at the center of our attention. We
                listen to your wishes, understand your needs, and together we
                find the path to the smile you truly want. We combine our
                experience and knowledge with advanced technology to advise you
                honestly, clearly, and without unnecessary complications.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 gold-divider" />
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 grid grid-cols-2 gap-6 text-center sm:grid-cols-3 sm:text-left">
                <div>
                  <div className="font-serif text-4xl font-light text-brand-green">
                    500+
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-brand-mute">
                    Smiles transformed
                  </div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-light text-brand-green">
                    20+
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-brand-mute">
                    Years of experience
                  </div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-light text-brand-green">
                    #1
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-brand-mute">
                    Master from Padua
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/doctors.webp"
                  alt="Mihaela Benko and Darjan Knehtl"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-40 w-40 border border-brand-gold/60 md:block" />
              <div className="pointer-events-none absolute -left-6 -top-6 hidden h-24 w-24 border border-brand-green/30 md:block" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Logo from "./Logo";

const columns = [
  {
    title: "Navigation",
    links: [
      { href: "#home", label: "Home" },
      { href: "#treatments", label: "Treatments" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
      { href: "#", label: "Terms of Use" },
    ],
  },
  {
    title: "Treatments",
    links: [
      { href: "#treatments", label: "Veneers" },
      { href: "#treatments", label: "Teeth Whitening" },
      { href: "#treatments", label: "Spark Aligner" },
      { href: "#treatments", label: "Implants" },
      { href: "#face", label: "Face Harmonization" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo size="sm" />
            <p className="mt-6 max-w-xs text-[14px] font-light leading-relaxed text-white/60">
              Center of Aesthetic Dentistry in Maribor. Premium quality with a
              personal approach.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-brand-gold">
                {col.title}
              </h4>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] font-light text-white/70 transition-colors hover:text-brand-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-brand-gold">
              Contact
            </h4>
            <div className="mt-6 space-y-3 text-[14px] font-light text-white/70">
              <p>
                Ulica Vita Kreigherja 15
                <br />
                2000 Maribor
              </p>
              <p>
                <a
                  href="tel:+38640336066"
                  className="block hover:text-brand-gold"
                >
                  Insurance: 040 336 066
                </a>
                <a
                  href="tel:+38640515426"
                  className="block hover:text-brand-gold"
                >
                  Private: 040 515 426
                </a>
              </p>
              <a
                href="mailto:info@benkoknehtl.si"
                className="block hover:text-brand-gold"
              >
                info@benkoknehtl.si
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-[12px] font-light text-white/50">
            © 2026 Benko &amp; Knehtl. All rights reserved.
          </p>
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
            Dentalni studio MB d.o.o.
          </p>
        </div>
      </div>
    </footer>
  );
}

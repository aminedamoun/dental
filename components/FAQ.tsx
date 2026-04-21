"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "How long does a full smile makeover take?",
    a: "Most cosmetic cases — veneers, bonding, whitening — are completed in 2 to 6 weeks from the first consultation to the final reveal. Orthodontics with Invisalign or Spark typically run 6 to 14 months, depending on the complexity of your case.",
  },
  {
    q: "Do the treatments hurt?",
    a: "Your comfort is our priority. Virtually every procedure we perform — including implants — is done under precise local anaesthetic, and most patients describe the process as surprisingly gentle. For anxious patients we also offer mild sedation options.",
  },
  {
    q: "How much do veneers and other treatments cost?",
    a: "Prices depend on the material (composite vs ceramic), the number of teeth involved, and the complexity of the smile design. At your consultation we provide a detailed, transparent written quote with no hidden costs.",
  },
  {
    q: "How long do dental implants last?",
    a: "With proper care, the Straumann titanium implants we place are designed to last a lifetime. The crown on top typically lasts 15+ years and can be replaced without touching the implant itself.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We offer flexible payment plans for larger treatments so you can proceed with the care you want without compromise. Ask us during your consultation and we will tailor something that works for you.",
  },
  {
    q: "What is the difference between Invisalign and Spark aligners?",
    a: "Both are premium invisible aligner systems. Spark (by Ormco) uses a proprietary TruGen material with better stain resistance and optical clarity. Invisalign has the longest clinical track record. During your consultation we recommend the best fit for your specific case.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes — send us a smile photo and a short description via our contact form and we will respond with a preliminary assessment, estimated treatment plan, and next steps within 24 hours.",
  },
  {
    q: "How do I care for my new veneers or whitened smile?",
    a: "Your new smile is easy to maintain: regular brushing and flossing, a soft-bristled brush, and avoiding hard foods like ice or whole nuts. We provide a personalised aftercare plan at the end of every treatment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-brand-cream py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          label="Questions"
          title="Everything you want to know"
          subtitle="If your question is not here, call us or send a message — we are always happy to help."
        />

        <div className="mt-16 divide-y divide-brand-ink/10 border-y border-brand-ink/10">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
                  >
                    <span
                      className={`font-serif text-lg font-light leading-tight transition-colors md:text-xl ${
                        isOpen ? "text-brand-green" : "text-brand-ink group-hover:text-brand-green"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`relative inline-flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 border-brand-gold text-brand-gold"
                          : "border-brand-ink/20 text-brand-ink/60"
                      }`}
                      aria-hidden="true"
                    >
                      <span className="absolute h-px w-4 bg-current" />
                      <span className="absolute h-4 w-px bg-current" />
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-12 text-[15px] font-light leading-relaxed text-brand-ink/70 md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[14px] font-light text-brand-ink/70">
            Still have a question?
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-brand-gold transition-colors hover:text-brand-green"
          >
            <span className="h-px w-6 bg-brand-gold" />
            Talk to our team
            <span className="h-px w-6 bg-brand-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}

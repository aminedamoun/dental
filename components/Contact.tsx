"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { IconPhone, IconMail, IconPin } from "./Icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-green py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full border border-brand-gold/10" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full border border-brand-gold/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-brand-gold">
                <span className="h-px w-6 bg-brand-gold" />
                Contact
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-white md:text-5xl">
                Book a consultation
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/70">
                Leave us a message or give us a call. We respond within 24
                hours and find a time that works for you.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-5">
                  <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center border border-brand-gold/40 text-brand-gold">
                    <IconPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-brand-gold">
                      Address
                    </div>
                    <div className="mt-2 text-[15px] font-light text-white/85">
                      Ulica Vita Kreigherja 15
                      <br />
                      2000 Maribor, Slovenia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center border border-brand-gold/40 text-brand-gold">
                    <IconPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-brand-gold">
                      Phone
                    </div>
                    <div className="mt-2 space-y-1 text-[15px] font-light text-white/85">
                      <div>
                        <span className="text-white/55">Insurance:</span>{" "}
                        <a
                          href="tel:+38640336066"
                          className="hover:text-brand-gold"
                        >
                          040 336 066
                        </a>
                      </div>
                      <div>
                        <span className="text-white/55">Private:</span>{" "}
                        <a
                          href="tel:+38640515426"
                          className="hover:text-brand-gold"
                        >
                          040 515 426
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center border border-brand-gold/40 text-brand-gold">
                    <IconMail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-brand-gold">
                      Email
                    </div>
                    <a
                      href="mailto:info@benkoknehtl.si"
                      className="mt-2 block text-[15px] font-light text-white/85 hover:text-brand-gold"
                    >
                      info@benkoknehtl.si
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="relative bg-white/[0.04] p-8 backdrop-blur-sm ring-1 ring-white/10 md:p-10"
            >
              <div className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" className="md:col-span-2" />
                <Textarea label="Your message" name="message" className="md:col-span-2" />
              </div>

              <label className="mt-6 flex cursor-pointer items-start gap-3 text-[13px] font-light text-white/70">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 accent-brand-gold"
                />
                <span>
                  I agree to the processing of personal data in accordance with
                  GDPR and the privacy policy.
                </span>
              </label>

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center bg-brand-gold px-8 py-4 text-[12px] uppercase tracking-[0.28em] text-brand-green transition-all hover:bg-brand-gold-light hover:shadow-[0_10px_30px_rgba(197,165,114,0.35)]"
              >
                {submitted ? "Thank you — we'll be in touch soon" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[11px] uppercase tracking-[0.25em] text-brand-gold/90">
        {label}
        {required && <span className="ml-1 text-brand-gold">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-0 border-b border-white/20 bg-transparent py-3 text-[15px] font-light text-white placeholder-white/30 outline-none transition-colors focus:border-brand-gold"
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  className = "",
}: {
  label: string;
  name: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[11px] uppercase tracking-[0.25em] text-brand-gold/90">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        className="mt-3 w-full resize-none border-0 border-b border-white/20 bg-transparent py-3 text-[15px] font-light text-white placeholder-white/30 outline-none transition-colors focus:border-brand-gold"
      />
    </label>
  );
}

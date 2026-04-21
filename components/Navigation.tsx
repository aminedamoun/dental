"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { IconChevronDown } from "./Icons";

type SubLink = { href: string; label: string };
type NavItem =
  | { label: string; href: string }
  | { label: string; children: SubLink[] };

const leftItems: NavItem[] = [
  {
    label: "Clinic",
    children: [
      { href: "#about", label: "About Us" },
      { href: "#about", label: "Our Team" },
    ],
  },
  {
    label: "Treatments",
    children: [
      { href: "#treatments", label: "Veneers" },
      { href: "#treatments", label: "Teeth Whitening" },
      { href: "#treatments", label: "Spark Invisible Aligner" },
      { href: "#treatments", label: "Dental Implants" },
      { href: "#treatments", label: "Composite Bonding" },
      { href: "#treatments", label: "Crowns & Prosthetics" },
      { href: "#face", label: "Hyaluronic Fillers" },
      { href: "#face", label: "Botulinum Toxin" },
      { href: "#face", label: "PRP Rejuvenation" },
    ],
  },
];

const rightItems: NavItem[] = [
  {
    label: "Smile Gallery",
    children: [
      { href: "#gallery", label: "Image Gallery" },
      { href: "#gallery", label: "Smile Videos" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

function DesktopItem({ item }: { item: NavItem }) {
  if ("href" in item) {
    return (
      <a
        href={item.href}
        className="text-[12px] uppercase tracking-[0.28em] text-white/80 transition-colors hover:text-brand-gold"
      >
        {item.label}
      </a>
    );
  }

  const isMega = item.children.length > 4;

  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.28em] text-white/80 transition-colors group-hover:text-brand-gold"
      >
        {item.label}
        <IconChevronDown className="transition-transform group-hover:rotate-180" />
      </button>

      <div
        className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 ${
          isMega ? "w-[420px]" : "w-56"
        }`}
      >
        <div className="relative bg-brand-green-dark py-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-brand-gold/15">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent" />
          {isMega ? (
            <div className="grid grid-cols-2 gap-x-4 px-4 py-2">
              {item.children.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="block px-2 py-2.5 text-[13px] font-light text-white/80 transition-colors hover:text-brand-gold"
                >
                  {c.label}
                </a>
              ))}
            </div>
          ) : (
            <ul className="py-1">
              {item.children.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="block px-6 py-2.5 text-[13px] font-light text-white/80 transition-colors hover:bg-white/[0.03] hover:text-brand-gold"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if ("href" in item) {
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className="block border-b border-white/10 py-4 text-[13px] uppercase tracking-[0.25em] text-white/85 hover:text-brand-gold"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-[13px] uppercase tracking-[0.25em] text-white/85"
      >
        {item.label}
        <IconChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="pb-3">
          {item.children.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                onClick={onNavigate}
                className="block py-2.5 pl-4 text-[14px] font-light text-white/70 hover:text-brand-gold"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-green/95 backdrop-blur-md shadow-[0_1px_0_rgba(197,165,114,0.15)]"
          : "bg-brand-green"
      }`}
    >
      {/* Thin top strip (optional, adds luxury feel) */}
      <div className="hidden border-b border-white/10 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[11px] font-light tracking-[0.15em] text-white/55 lg:px-10">
          <span>Ulica Vita Kreigherja 15, 2000 Maribor</span>
          <div className="flex items-center gap-6">
            <a href="tel:+38640336066" className="hover:text-brand-gold">
              Insurance · 040 336 066
            </a>
            <a href="tel:+38640515426" className="hover:text-brand-gold">
              Private · 040 515 426
            </a>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-8 px-6 py-5 lg:px-10 lg:py-6">
        {/* Left items */}
        <nav className="hidden items-center justify-end gap-10 lg:flex">
          {leftItems.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Mobile hamburger (takes left cell on mobile) */}
        <div className="flex items-center lg:hidden">
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-brand-gold"
          >
            <span
              className={`block h-[1.5px] w-6 bg-brand-gold transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-brand-gold transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-brand-gold transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Centered logo */}
        <div className="flex justify-center">
          <Logo size="md" />
        </div>

        {/* Right items */}
        <nav className="hidden items-center justify-start gap-10 lg:flex">
          {rightItems.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Mobile phone (takes right cell on mobile) */}
        <div className="flex items-center justify-end lg:hidden">
          <a
            href="tel:+38640515426"
            className="text-[11px] uppercase tracking-[0.25em] text-brand-gold"
          >
            Call
          </a>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden border-t border-white/10 bg-brand-green-dark transition-[max-height] duration-500 ${
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4">
          {[...leftItems, ...rightItems].map((item) => (
            <MobileItem
              key={item.label}
              item={item}
              onNavigate={() => setOpen(false)}
            />
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex w-full items-center justify-center border border-brand-gold px-5 py-3 text-[12px] uppercase tracking-[0.28em] text-brand-gold hover:bg-brand-gold hover:text-brand-green"
          >
            Book appointment
          </a>
        </div>
      </div>
    </header>
  );
}

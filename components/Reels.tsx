"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconSpeakerOn, IconSpeakerOff, IconPlay } from "./Icons";

type Reel = {
  src: string;
  caption: string;
};

const reels: Reel[] = [
  { src: "/reels/reel-1.mp4", caption: "A warm welcome, every visit" },
  { src: "/reels/reel-2.mp4", caption: "Precision consultations" },
  { src: "/reels/reel-3.mp4", caption: "Crafted with care" },
  { src: "/reels/reel-4.mp4", caption: "The moment you see your new smile" },
];

function ReelCard({
  reel,
  index,
  activeIndex,
  setActiveIndex,
}: {
  reel: Reel;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (i: number | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const isUnmuted = activeIndex === index;

  // Sync mute state when active index changes
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isUnmuted;
    if (isUnmuted) {
      // Try to play with sound (browsers usually allow after a user gesture)
      const p = v.play();
      if (p && typeof (p as Promise<void>).catch === "function") {
        (p as Promise<void>).catch(() => {});
      }
    }
  }, [isUnmuted]);

  const toggleSound = () => {
    setActiveIndex(isUnmuted ? null : index);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-sm bg-gradient-to-br from-brand-green to-brand-green-dark">
      {!hasError ? (
        <video
          ref={videoRef}
          src={reel.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setHasError(true)}
          onClick={togglePlay}
          className="h-full w-full cursor-pointer object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play reel"
          className="flex h-full w-full flex-col items-center justify-center gap-4 text-brand-gold/80"
        >
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/40">
            <IconPlay className="ml-1 h-7 w-7" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em]">
            Reel · 0{index + 1}
          </span>
        </button>
      )}

      {/* Bottom gradient + caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
        <p className="font-serif text-base font-light leading-tight text-white drop-shadow">
          {reel.caption}
        </p>
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isUnmuted ? "Mute video" : "Unmute video"}
          aria-pressed={isUnmuted}
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full backdrop-blur-md transition-all ${
            isUnmuted
              ? "bg-brand-gold text-brand-green"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          {isUnmuted ? <IconSpeakerOn /> : <IconSpeakerOff />}
        </button>
      </div>

      {/* Pause indicator when paused */}
      {!isPlaying && !hasError && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play reel"
          className="absolute inset-0 flex items-center justify-center bg-black/30"
        >
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
            <IconPlay className="ml-1 h-7 w-7" />
          </span>
        </button>
      )}
    </div>
  );
}

export default function Reels() {
  // Only one reel can be unmuted at a time (Instagram-style)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-brand-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Smile reels"
          title="See us in motion"
          subtitle="Behind the scenes, real patient transformations and moments from our clinic. Tap the speaker to listen."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {reels.map((reel, i) => (
            <Reveal key={reel.src} delay={i * 100}>
              <ReelCard
                reel={reel}
                index={i}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

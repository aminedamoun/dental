import Image from "next/image";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { h: 36, w: 113 },
  md: { h: 48, w: 151 },
  lg: { h: 64, w: 201 },
};

export default function Logo({ className = "", size = "md" }: Props) {
  const s = sizes[size];
  return (
    <a
      href="#home"
      aria-label="Benko & Knehtl"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/logo.svg"
        alt="Benko & Knehtl"
        width={s.w}
        height={s.h}
        priority
        className="h-auto"
        style={{ height: s.h, width: "auto" }}
      />
    </a>
  );
}

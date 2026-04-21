import { IconImagePlaceholder } from "./Icons";

type Props = {
  className?: string;
  label?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
};

const ratios: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
};

export default function Placeholder({
  className = "",
  label,
  ratio = "landscape",
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm bg-gradient-to-br from-neutral-200 to-neutral-300 ${ratios[ratio]} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-neutral-500">
        <IconImagePlaceholder />
        {label && (
          <span className="text-xs uppercase tracking-[0.25em]">{label}</span>
        )}
      </div>
      {/* subtle frame */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
    </div>
  );
}

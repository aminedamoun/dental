type IconProps = { className?: string };

const base = "h-6 w-6";

export const IconTooth = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M7.5 3c-2.8 0-4.5 2-4.5 4.8 0 2 .8 3.2 1.4 5 .6 1.8.3 3.2.8 5.4.5 2.2 1.4 3.8 2.4 3.8.9 0 1.3-1 1.6-2.5.3-1.5.4-3.5 1.4-3.5s1.1 2 1.4 3.5c.3 1.5.7 2.5 1.6 2.5 1 0 1.9-1.6 2.4-3.8.5-2.2.2-3.6.8-5.4.6-1.8 1.4-3 1.4-5C21.8 5 20.1 3 17.3 3c-1.8 0-2.9.8-4 1.4-.7.4-1 .6-1.3.6s-.6-.2-1.3-.6C9.6 3.8 8.5 3 7.5 3z" />
  </svg>
);

export const IconSparkle = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5 15 9M6.5 17.5 9 15" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const IconAligner = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M4 7c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v5c0 4-3.5 8-8 8s-8-4-8-8V7z" />
    <path d="M8 9v4M12 9v4M16 9v4" />
  </svg>
);

export const IconImplant = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M9 3h6v4H9zM8 7h8l-1 3H9z" />
    <path d="M12 10v4M10 12h4M12 14c-1 2-2 4-2 5a2 2 0 1 0 4 0c0-1-1-3-2-5z" />
  </svg>
);

export const IconBrush = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M4 20l6-6M14 10l6-6a2 2 0 0 0-2.8-2.8L11 7.4" />
    <path d="M8 12l4 4M7 13l-3 3a2 2 0 1 0 2.8 2.8l3-3" />
  </svg>
);

export const IconCrown = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z" />
    <circle cx="3" cy="8" r="1" />
    <circle cx="21" cy="8" r="1" />
    <circle cx="12" cy="5" r="1" />
  </svg>
);

export const IconLeaf = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M5 19c0-8 6-14 16-14 0 10-6 16-14 16-1.1 0-2-.9-2-2z" />
    <path d="M5 19L15 9" />
  </svg>
);

export const IconDiamond = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M6 3h12l3 6-9 12L3 9z" />
    <path d="M3 9h18M9 3l3 6 3-6M12 9l-2 12M12 9l2 12" />
  </svg>
);

export const IconAward = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 14l-1.8 6 5.3-3 5.3 3-1.8-6" />
  </svg>
);

export const IconMonitor = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M7 10l2 2 3-3 2 2 3-4" />
  </svg>
);

export const IconHeart = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21z" />
  </svg>
);

export const IconCheck = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M4 12l5 5L20 6" />
  </svg>
);

export const IconArrowRight = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 ${className}`}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const IconPhone = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const IconMail = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const IconPin = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`}>
    <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconSpeakerOn = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 ${className}`}>
    <path d="M11 5L6 9H3v6h3l5 4V5z" />
    <path d="M15.5 8.5a4 4 0 0 1 0 7" />
    <path d="M18 5.5a8 8 0 0 1 0 13" />
  </svg>
);

export const IconSpeakerOff = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 ${className}`}>
    <path d="M11 5L6 9H3v6h3l5 4V5z" />
    <path d="M16 9l5 6M21 9l-5 6" />
  </svg>
);

export const IconPlay = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 ${className}`}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const IconChevronDown = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`h-3 w-3 ${className}`}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const IconImagePlaceholder = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={`h-10 w-10 ${className}`}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="8.5" cy="10.5" r="1.5" />
    <path d="M21 17l-5-5-8 8" />
  </svg>
);

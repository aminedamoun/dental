import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrowRight } from "./Icons";

type Post = {
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  img: string;
};

const posts: Post[] = [
  {
    category: "Smile Design",
    date: "Mar 2026",
    readTime: "6 min read",
    title: "The art of veneers: what a smile design really looks like",
    excerpt:
      "From the first consultation to the final reveal, we walk you through every step of designing a smile that feels unmistakably yours.",
    img: "/services/veneers.webp",
  },
  {
    category: "Orthodontics",
    date: "Feb 2026",
    readTime: "8 min read",
    title: "Invisalign vs Spark: which invisible aligner is right for you?",
    excerpt:
      "Both systems are excellent — but they shine in different ways. Here is how we decide which one suits your case.",
    img: "/services/spark.webp",
  },
  {
    category: "Aftercare",
    date: "Jan 2026",
    readTime: "4 min read",
    title: "After your whitening: 5 habits to keep that glow",
    excerpt:
      "Whitening results last longer than you think — if you know the few daily rituals that protect your new shade.",
    img: "/services/whitening.webp",
  },
];

export default function Blogs() {
  return (
    <section id="journal" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            label="Journal"
            title="Insights &amp; smile stories"
            subtitle="Honest advice, treatment deep-dives, and behind-the-scenes from our clinic."
            align="left"
          />
          <Reveal>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-brand-gold transition-colors hover:text-brand-green"
            >
              View all articles
              <IconArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 100}>
              <article className="group flex h-full flex-col">
                <a
                  href="#"
                  className="relative block aspect-[4/3] overflow-hidden bg-brand-cream"
                  aria-label={post.title}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 bg-brand-green px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-brand-gold">
                    {post.category}
                  </span>
                </a>

                <div className="mt-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-brand-mute">
                  <span>{post.date}</span>
                  <span className="h-px w-4 bg-brand-mute/40" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mt-4 font-serif text-[22px] font-light leading-snug text-brand-ink transition-colors group-hover:text-brand-green">
                  <a href="#">{post.title}</a>
                </h3>

                <p className="mt-3 text-[15px] font-light leading-relaxed text-brand-ink/65">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-brand-gold transition-colors hover:text-brand-green"
                >
                  Read article
                  <IconArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

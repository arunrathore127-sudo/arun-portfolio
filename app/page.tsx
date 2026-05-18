import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import FadeUp from "@/components/FadeUp";
import { PROJECTS, ESSAYS, SOCIAL_LINKS } from "@/lib/data";

const LIFE_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=900&q=80",
    alt: "A quiet street at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    alt: "A candid city moment",
  },
  {
    src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80",
    alt: "A travel snapshot",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    alt: "A night out with friends",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    alt: "A moment in nature",
  },
  {
    src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=900&q=80",
    alt: "An everyday detail",
  },
];

/* ── Social icon map ─────────────────────────────────────── */
function SocialIcon({ icon }: { icon: string }) {
  if (icon === "email") return <Mail size={14} />;
  if (icon === "github") return <Github size={14} />;
  if (icon === "linkedin") return <Linkedin size={14} />;
  // X / Twitter
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navigation />

      <main className="mx-auto max-w-[1200px] px-6 sm:px-10">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          id="hero"
          className="animate-[fadeUp_0.8s_ease_forwards] grid gap-12 pt-12 opacity-0 lg:grid-cols-[1fr_1fr] lg:items-start"
        >
          <div>
            <h1
              className="text-balance tracking-[-0.025em] text-ink"
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontStyle: "italic",
                fontSize: "clamp(3rem, 9vw, 5.5rem)",
                lineHeight: 1,
              }}
            >
              Designing quiet products with uncommon care.
            </h1>
          </div>

          <div className="space-y-8 text-[18px] leading-[1.8] text-ink">
            <p className="max-w-[780px] font-light">
              I’m Arun — a product designer based in India, shaping end-to-end
              experiences for travel, media and AI. I partner with teams to move ideas from research to launch with
              thoughtful systems Currently designing at Hawkmartech.
            </p>

            

            <div className="flex flex-wrap gap-4">
              {["Product Design", "Open to work"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#e4e4e4] px-4 py-1.5 text-[12px] tracking-[0.12em] text-muted"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </section>


        {/* ── WORK ─────────────────────────────────────────── */}
        <section id="work" className="py-20">
          <FadeUp>
            <p className="mb-12 text-[24px] font-semibold uppercase tracking-[0.12em] text-muted">
              Work
            </p>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </section>

      

        {/* ── ESSAY ────────────────────────────────────────── */}
        <section id="essay" className="py-20">
          <FadeUp>
            <p className="mb-12 text-[24px] font-semibold uppercase tracking-[0.12em] text-muted">
              Essay
            </p>
          </FadeUp>

          <ul>
            {ESSAYS.map((essay, i) => (
              <FadeUp key={essay.title} delay={i * 0.06}>
                <li className="group border-b border-[#e4e4e4] first:border-t">
                  <a
                    href={essay.href}
                    className="flex items-baseline justify-between gap-6 py-[1.1rem] transition-opacity duration-200 hover:opacity-50"
                  >
                    <span className="text-[15px] text-ink">{essay.title}</span>
                    <span className="shrink-0 tabular-nums text-[12px] text-muted">
                      {essay.date}
                    </span>
                  </a>
                </li>
              </FadeUp>
            ))}
          </ul>
        </section>

        <hr className="border-[#e4e4e4]" />

        {/* ── STORY ────────────────────────────────────────── */}
        <section id="story" className="py-20">
          <FadeUp>
            <p className="mb-12 text-[24px] font-semibold uppercase tracking-[0.12em] text-muted">
              Story
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="space-y-5 text-[16px] font-light leading-[1.8] text-ink max-w-[600px]">
              <p>
                My design journey started randomly — clicking on a college link about UX design, to now building and shipping real products.
              </p>

              <blockquote
                className="border-l-2 border-ink pl-6 text-balance leading-[1.4] tracking-[-0.01em]"
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontStyle: "italic",
                  fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                }}
              >
                &ldquo;“I didn’t plan to become a designer — I grew into it.”&rdquo;
              </blockquote>

              <p>
               With a background in Design, I work at the intersection of logic and intuition — crafting simple, scalable experiences. I’ve built products from 0→1, including Viacation, across travel and sports.
If you’re building something ambitious and care about craft, I’d love to hear from you.
              </p>

              <p>
                These days I work at Luminary, where I lead design across the
                product. I&apos;ve shipped mobile apps, design systems, marketing
                sites, and a handful of side projects I&apos;m quietly proud of.
                I write occasionally, run badly, and make excellent coffee.
              </p>

              <p>
                If you&apos;re working on something ambitious and care about craft,
                I&apos;d love to hear from you.
              </p>
            </div>
          </FadeUp>
        </section>

        <hr className="border-[#e4e4e4]" />

        {/* ── A LIFE ───────────────────────────────────────────── */}
        <section id="A-Life" className="py-20">
          <FadeUp>
            <p className="mb-12 text-[24px] font-semibold uppercase tracking-[0.12em] text-muted">
              A Life
            </p>
          </FadeUp>

          <FadeUp delay={0.05}>
            <div className="mb-10 max-w-[680px] space-y-4 text-[16px] font-light leading-[1.8] text-ink">
              <h2
                className="text-[2.5rem] tracking-[-0.03em]"
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontStyle: "italic",
                }}
              >
                A wall of moments.
              </h2>
              <p>
                Photos I clicked along the way — small snapshots of travel,
                people, streets, and everyday details that still feel like home.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-4 sm:grid-cols-3">
            {LIFE_PHOTOS.map((photo, i) => (
              <FadeUp key={photo.src} delay={0.08 * i}>
                <div className="overflow-hidden rounded-[2rem] bg-[#f5f5f5] shadow-sm transition-transform duration-500 hover:-translate-y-1">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                    style={{ aspectRatio: "4 / 5" }}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        <hr className="border-[#e4e4e4]" />

        {/* ── CONNECT ──────────────────────────────────────── */}
        <section id="connect" className="pb-24 pt-20">
          <FadeUp>
            <p className="mb-10 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
              Connect
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="mb-10 text-balance tracking-[-0.025em] text-ink"
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontStyle: "italic",
                fontSize: "clamp(2rem, 6vw, 3.75rem)",
                lineHeight: 1.1,
              }}
            >
              Let&apos;s make
              <br />
              something good.
            </h2>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-[#e4e4e4] px-5 py-2 text-[13px] text-ink transition-all duration-200 hover:border-ink hover:bg-ink hover:text-[#fafafa]"
                >
                  <SocialIcon icon={icon} />
                  {label}
                </a>
              ))}
            </div>
          </FadeUp>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="border-t border-[#e4e4e4]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-10">
          <p className="text-[12px] text-muted">© 2026 Arun Pratap Singh Rathore. All rights reserved.</p>
          <a
            href="#hero"
            className="group flex items-center gap-1 text-[12px] text-muted transition-colors duration-200 hover:text-ink"
          >
            Back to top
            <ArrowUpRight
              size={11}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

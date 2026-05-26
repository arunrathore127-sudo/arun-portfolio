import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Marquee from "@/components/Marquee";
import PhotoMarquee from "@/components/PhotoMarquee";
import ProjectCard from "@/components/ProjectCard";
import FadeUp from "@/components/FadeUp";
import Process from "@/components/Process";
import { PROJECTS, ESSAYS, SOCIAL_LINKS } from "@/lib/data";

const LIFE_PHOTOS = [
  {
    src: "/images/A 1.png",
    alt: "A quiet street at dusk",
  },
  {
    src: "/images/A 2.png",
    alt: "A candid city moment",
  },
  {
    src: "/images/A 3.png",
    alt: "A travel snapshot",
  },
  {
    src: "/images/A 4.png",
    alt: "A night out with friends",
  },
  {
    src: "/images/A 5.png",
    alt: "A moment in nature",
  },
  {
    src: "/images/A 6.png",
    alt: "An everyday detail",
  },
];

/* ── Social icon map ─────────────────────────────────────── */
function SocialIcon({ icon }: { icon: string }) {
  // if (icon === "email") return <Mail size={14} />;
  // if (icon === "github") return <Github size={14} />;
  // if (icon === "linkedin") return <Linkedin size={14} />;
  // X / Twitter
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> */}
    </svg>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navigation />

      <main className="w-full px-4 md:px-8 lg:px-12">

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

        <div className="w-screen relative left-[50%] -translate-x-[50%] mt-20 mb-4">
          <Marquee />
        </div>

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



        {/* ── PROCESS ──────────────────────────────────────── */}
        <div className="w-screen relative left-[50%] -translate-x-[50%]">
          <Process />
        </div>





        {/* ── A LIFE ───────────────────────────────────────────── */}
        <section id="A-Life" className="py-20">
          <FadeUp>
            <p className="mb-12 text-[24px] font-semibold uppercase tracking-[0.12em] text-muted">
              A Life
            </p>
          </FadeUp>

          <FadeUp delay={0.05}>
            <div className="mb-10 max-w-[680px] space-y-4 text-[16px] font-light leading-[1.8] text-muted">
              <h2
                className="text-[2.5rem] tracking-[-0.03em] text-ink"
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontStyle: "italic",
                }}
              >
                
              </h2>
              <p>
                Photos I clicked along the way — small snapshots of travel,
                people and everyday details that still feel like home.
              </p>
            </div>
          </FadeUp>

          <div className="w-screen relative left-[50%] -translate-x-[50%] mt-12">
            <PhotoMarquee photos={LIFE_PHOTOS} />
          </div>
        </section>


      </main>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="w-screen relative left-[50%] -translate-x-[50%] bg-[#F6F6F6] pt-24 pb-8 flex flex-col justify-between px-4 md:px-8 lg:px-12" style={{ minHeight: "60vh" }}>
        <div className="flex-1 flex flex-col justify-center w-full">
          <h2
            className="uppercase tracking-[-0.04em] leading-[0.85] m-0 p-0 text-center sm:text-left"
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: "clamp(3rem, 13.5vw, 12rem)",
            }}
          >
            STAY CURIOUS
          </h2>
          <h2
            className="uppercase tracking-[0.02em] mt-4 text-center sm:text-left"
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: "42px",
            }}
          >
            LET&apos;S MAKE SOMETHING GOOD.
          </h2>
        </div>

        <div className="mt-32 w-full flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 text-[12px] font-medium uppercase tracking-[0.15em] font-sans">
          <a href="mailto:ARUNRATHORE127@gmail.com" className="hover:opacity-70 transition-opacity">
            ARUNRATHORE127@gmail.com
          </a>
          
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex items-center gap-1">
                LINKEDIN ↗
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex items-center gap-1">
                TWITTER ↗
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex items-center gap-1">
                INSTAGRAM ↗
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

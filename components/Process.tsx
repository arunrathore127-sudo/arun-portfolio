import React from "react";
import FadeUp from "./FadeUp";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Empathy cannot be automated.",
    description: "AI can generate options. Only humans can understand pain. The best product decisions still come from listening deeply to users and respecting the emotion behind their behaviour.",
  },
  {
    num: "02",
    title: "Clarity beats complexity.",
    description: "A powerful product does not feel powerful because it has many features. It feels powerful because it makes the next step obvious..",
  },
  {
    num: "03",
    title: "Trust is adesign feature.",
    description: "If users do not understand what the system is doing, they will not trust it.",
  },
  {
    num: "04",
    title: "Test & Iterate",
    description: "Validating ideas with real users, gathering feedback, and refining the design until it solves the problem beautifully.",
  },
  {
    num: "05",
    title: "Execute & Scale",
    description: "Crafting polished, production-ready interfaces and cohesive design systems for seamless engineering handoff.",
  },
  {
    num: "06",
    title: "Ship & Measure",
    description: "Partnering with development to ensure quality implementation, then analyzing data post-launch to inform future updates.",
  },
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-[#FAFAFA] py-16 my-12">
      <div className="w-full px-4 md:px-8 lg:px-12">
        
        {/* ── HEADER ─────────────────────────────────────────── */}
        <FadeUp>
          <p className="mb-12 text-[24px] font-semibold uppercase tracking-[0.12em] text-muted">
            HOW I THINK
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mb-12 text-[24px] font-medium leading-[1.8] text-muted max-w-[600px]">
            Staying human
in the age of AI..
          </p>
        </FadeUp>

        {/* ── GRID ───────────────────────────────────────────── */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => (
            <FadeUp key={step.num} delay={0.1 * i}>
              <div className="group relative flex h-full flex-col rounded-2xl bg-[#F6F6F6] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-[#EA4B24]/30 border border-transparent">
                
                {/* Number */}
                <span className="mb-8 text-[12px] font-semibold text-[#EA4B24]/70 tracking-[0.15em]">
                  {step.num}
                </span>

                {/* Abstract Placeholder for Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#FBF6E2]/50 text-[#EA4B24] transition-colors duration-300 group-hover:bg-[#FBF6E2]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 22h20L12 2z" />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-[20px] font-medium text-[#EA4B24] tracking-tight font-sans">
                  {step.title}
                </h3>
                <p className="text-[15px] font-light leading-[1.6] text-[#4a4a4a]">
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import FadeUp from "@/components/FadeUp";
import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <>
      <Navigation />

      <main className="mx-auto max-w-[780px] px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[13px] text-ink hover:text-muted transition-colors duration-200 mt-8"
        >
          <ArrowLeft size={13} />
          Back to work
        </Link>

        {/* Project Hero */}
        <FadeUp delay={0.1}>
          <section className="py-8 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#e4e4e4] px-3 py-0.5 text-[11px] font-medium uppercase tracking-[0.06em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
                <span className="rounded-full border border-[#e4e4e4] px-3 py-0.5 text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
                  {project.year}
                </span>
              </div>

              <h1
                className="text-balance tracking-[-0.025em] text-ink"
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontStyle: "italic",
                  fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </h1>
            </div>

            {/* Hero image */}
            {project.heroImage && (
              <div className="w-full overflow-hidden rounded-lg bg-[#f5f5f5]" style={{ aspectRatio: "16 / 9" }}>
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  width={1000}
                  height={562}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}
          </section>
        </FadeUp>

        {/* Project meta & overview */}
        <section className="py-4 grid gap-12 md:grid-cols-[1fr_2fr]">
          <FadeUp delay={0.15}>
            <div className="space-y-12">
              {/* Role */}
              <div className="space-y-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                  Role
                </p>
                <p className="text-[15px] text-ink">{project.role}</p>
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                  Timeline
                </p>
                <p className="text-[15px] text-ink">{project.timeline}</p>
              </div>

              {/* Team */}
              <div className="space-y-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                  Team
                </p>
                <div className="space-y-1">
                  {project.team?.map((member) => (
                    <p key={member} className="text-[15px] text-ink">
                      {member}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="space-y-6">
              <p className="text-[18px] leading-[1.8] font-light text-ink">
                {project.overview}
              </p>
              <p className="text-[18px] leading-[1.8] font-light text-ink">
                {project.description}
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Project sections */}
        {project.sections && project.sections.length > 0 && (
          <section className="py-16 space-y-16">
            {project.sections.map((section, index) => (
              <FadeUp key={index} delay={0.1 + index * 0.05}>
                {section.type === "text" && (
                  <div className="max-w-[700px] space-y-4">
                    {section.title && (
                      <h2
                        className="text-[2rem] tracking-[-0.025em] text-ink"
                        style={{
                          fontFamily: '"Instrument Serif", Georgia, serif',
                          fontStyle: "italic",
                        }}
                      >
                        {section.title}
                      </h2>
                    )}
                    <p className="text-[18px] leading-[1.8] font-light text-ink">
                      {section.content}
                    </p>
                    {section.linkUrl && (
                      <a
                        href={section.linkUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[18px] font-medium text-primary hover:underline"
                      >
                        {section.linkUrl}
                      </a>
                    )}
                  </div>
                )}

                {section.type === "image" && section.src && (
                  <div className="w-full overflow-hidden rounded-lg bg-[#f5f5f5]">
                    <Image
                      src={section.src}
                      alt={section.alt || "Project image"}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                      sizes="100vw"
                    />
                  </div>
                )}
              </FadeUp>
            ))}
          </section>
        )}

        {/* Navigation to other projects */}
        <section className="py-20 border-t border-[#e4e4e4]">
          <div className="grid gap-12 ">
            

            {/* Next project */}
            <FadeUp delay={0.1}>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group block space-y-4 hover:opacity-60 transition-opacity duration-200 md:text-right"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                  Next project
                </p>
                <div className="space-y-2">
                  <h3
                    className="text-[1.5rem] leading-tight tracking-tight text-ink"
                    style={{
                      fontFamily: '"Instrument Serif", Georgia, serif',
                      fontStyle: "italic",
                    }}
                  >
                    {nextProject.title}
                  </h3>
                  <p className="text-[14px] text-muted">{nextProject.year}</p>
                </div>
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e4e4e4] mt-20">
        <div className="mx-auto flex max-w-[980px] flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-[12px] text-muted">© 2026 Arun Pratap Singh Rathore. All rights reserved.</p>
          <Link
            href="#"
            className="group flex items-center gap-1 text-[12px] text-muted transition-colors duration-200 hover:text-ink"
          >
            Back to top
            <ArrowUpRight
              size={11}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </footer>
    </>
  );
}

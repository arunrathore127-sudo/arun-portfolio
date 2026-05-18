"use client";

import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";
import Image from "next/image";
export interface Project {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  placeholderClass: string;
  placeholderContent?: React.ReactNode;
  heroImage?: string;
  role?: string;
  timeline?: string;
  team?: string[];
  overview?: string;
  sections?: Array<{
    type: "text" | "image";
    title?: string;
    content?: string;
    linkUrl?: string;
    src?: string;
    alt?: string;
  }>;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <FadeUp delay={index * 0.08}>
      <a href={`/projects/${project.slug}`} className="group block py-2">
        <article>
          {/* Image / Visual placeholder */}
          <div
            className={`relative mb-7 w-full overflow-hidden rounded-lg transition-shadow duration-300 group-hover:shadow-lg ${project.placeholderClass}`}
            style={{ aspectRatio: "16 / 9" }}
          >
            {project.placeholderContent || project.heroImage ? (
              <Image
                src={project.placeholderContent ? `/images/${project.placeholderContent}` : project.heroImage!}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                {project.placeholderContent}
              </div>
            )}
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/5" />
          </div>

          {/* Card content */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Tags */}
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

              <div className="space-y-3">
                <h3
                  className="text-[1.55rem] leading-tight tracking-tight text-ink"
                  style={{
                    fontFamily: '"Instrument Serif", Georgia, serif',
                    fontStyle: "italic",
                  }}
                >
                  {project.title}
                </h3>

                <p className="text-[14px] leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
            </div>

            {/* View project link */}
            <div className="inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-[13px] text-ink">
              View project
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </article>
      </a>
    </FadeUp>
  );
}

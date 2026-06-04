"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import FadeUp from "./FadeUp";
import { Project } from "./ProjectCard";

interface FeaturedCarouselProps {
  projects: Project[];
}

export default function FeaturedCarousel({ projects }: FeaturedCarouselProps) {
  // Start at the middle set of our cloned array to allow scrolling backwards immediately
  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const [animate, setAnimate] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [centerOffset, setCenterOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Triple the array to create a seamless infinite loop illusion
  const extendedProjects = [
    ...projects,
    ...projects,
    ...projects,
  ];

  // Handle responsive cards amount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1.25); // Mobile: scale down to 80% to show edges
        setCenterOffset((100 - (100 / 1.25)) / 2); // Center the active card
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet
        setCenterOffset(0);
      } else {
        setCardsToShow(3); // Desktop
        setCenterOffset(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useCallback(() => {
    if (animate) return; // Prevent double clicking while transitioning
    setAnimate(true);
    setCurrentIndex((prev) => prev + 1);
  }, [animate]);

  const prev = useCallback(() => {
    if (animate) return; // Prevent double clicking while transitioning
    setAnimate(true);
    setCurrentIndex((prev) => prev - 1);
  }, [animate]);

  // Autoscroll functionality
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      next();
    }, 2500); // Faster speed (2.5 seconds)
    return () => clearInterval(timer);
  }, [isHovered, next]);

  const handleTransitionEnd = () => {
    setAnimate(false);
    // Instantly snap to the mirrored equivalent position when we reach the clones bounds
    if (currentIndex >= projects.length * 2) {
      setCurrentIndex(currentIndex - projects.length);
    } else if (currentIndex <= projects.length - 1) {
      setCurrentIndex(currentIndex + projects.length);
    }
  };

  return (
    <div className="w-full overflow-hidden font-sans">
        
      {/* Section Header */}
      <div className="px-4 md:px-8 lg:px-12 w-full">
        <FadeUp>
          <p className="mb-12 text-[24px] font-semibold uppercase tracking-[0.12em] text-muted text-left">
            Work
          </p>
        </FadeUp>
      </div>

      {/* Carousel Outer Wrapper */}
      <div 
        className="relative group w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          
        {/* Navigation Arrows */}
        <button
          onClick={prev}
          aria-label="Previous Project"
          className="absolute left-4 md:left-8 top-[35%] -translate-y-1/2 z-20 w-12 h-12 hidden md:flex items-center justify-center bg-white/90 hover:bg-white backdrop-blur-md border border-[#e4e4e4] text-ink rounded-full shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          aria-label="Next Project"
          className="absolute right-4 md:right-8 top-[35%] -translate-y-1/2 z-20 w-12 h-12 hidden md:flex items-center justify-center bg-white/90 hover:bg-white backdrop-blur-md border border-[#e4e4e4] text-ink rounded-full shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden w-full">
          <div
              ref={containerRef}
              className="flex"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}% + ${centerOffset}%))`,
                transition: animate ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedProjects.map((project, idx) => (
                <div
                  key={`${project.slug}-${idx}`}
                  className="flex-shrink-0 px-4 md:px-6 lg:px-8"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <a href={`/projects/${project.slug}`} className="flex flex-col items-center group/card cursor-pointer h-full block transition-transform duration-500 hover:-translate-y-2">
                    {/* Image Wrapper */}
                    <div className="w-full aspect-square relative overflow-hidden rounded-2xl mb-8 bg-[#F6F6F6] shadow-sm transition-all duration-500 group-hover/card:shadow-xl">
                      {project.placeholderContent || project.heroImage ? (
                        <Image
                          src={project.placeholderContent ? `/images/${project.placeholderContent}` : project.heroImage!}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/card:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted">
                          {project.title}
                        </div>
                      )}
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover/card:bg-black/5" />
                    </div>
                    {/* Text Metadata */}
                    <div className="text-center flex flex-col items-center">
                      <span className="text-muted text-sm md:text-base font-medium mb-3">{project.year}</span>
                      <h4 
                        className="text-[1.55rem] leading-tight tracking-tight text-ink mb-1"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: "italic" }}
                      >
                        {project.title}
                      </h4>
                      <span className="text-muted text-[11px] uppercase tracking-[0.06em] font-medium mb-8 line-clamp-1 max-w-[80%]">
                        {project.tags.join(" • ")}
                      </span>
                      {/* Button */}
                      <button className="px-6 py-2 border border-[#e4e4e4] text-ink font-medium text-[11px] uppercase tracking-[0.06em] rounded-full transition-all hover:border-ink hover:bg-[#fafafa] duration-300">
                        View Project
                      </button>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
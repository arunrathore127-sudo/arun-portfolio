import React from "react";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoMarqueeProps {
  photos: Photo[];
}

export default function PhotoMarquee({ photos }: PhotoMarqueeProps) {
  return (
    <div className="w-full overflow-hidden flex items-center group py-4">
      {/* 
        The container is set to flex and w-max so it takes exactly the width of its content. 
        It contains two identical sets of photos to ensure seamless infinite scrolling.
        The animation moves the content left by 50% of the total width.
      */}
      <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {photos.map((photo, j) => (
              <div 
                key={`${i}-${j}`} 
                className="mx-2 md:mx-3 w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] shrink-0 overflow-hidden rounded-[24px] bg-[#f5f5f5] shadow-sm transition-transform duration-500 hover:-translate-y-2"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "4 / 5" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

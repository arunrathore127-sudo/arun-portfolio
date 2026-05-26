import React from "react";

const PHRASES = [
  "CREATIVE THINKER",
  "SHOOTING PLAYER",
  "TRAVELLER",
  "PROBLEM SOLVER",
  "SYSTEMS THINKER",
  "CURIOUS KID",
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-bg border-y border-border py-4 flex items-center group">
      {/* 
        The container is set to flex and w-max so it takes exactly the width of its content. 
        It contains two identical sets of phrases to ensure seamless scrolling.
        The animation moves the content left by 50% of the total width.
      */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {PHRASES.map((phrase, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <span className="mx-8 md:mx-12 text-[14px] font-medium tracking-[0.15em] text-muted uppercase whitespace-nowrap">
                  {phrase}
                </span>
                <span className="text-muted text-[12px]">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

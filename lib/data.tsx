import type { Project } from "@/components/ProjectCard";

export const PROJECTS: Project[] = [
  {
    slug: "viacation",
    title: "Viacation Web & Mobile App",
    description:
      "Currently building this that offers offering curated tours across global destinations. We've builded the platform from the ground up to its first-stage release and am now working on its next phase of development.",
    year: "2026",
    tags: ["Mobile","Website", "Product Design"],
    placeholderClass: "bg-[#1a1a2e]",
    placeholderContent: "Cover.png",
    heroImage: "/images/1st Viacation.png",
    role: "Product Designer",
    timeline: "2025 - 2026",
    team: ["2 Designer", "4 Engineers"],
    overview: "Viacation is an emerging travel brand offering curated tours across global destinations.",
    sections: [
      { type: "text", title: "The Challenge", content: "Travel platforms are often cluttered, with too many choices and unclear flows. Users drop off while comparing options or switching between discovery and booking." },
      {
        type: "text",
        title: "How we encountered",
        content: "We discovered that travellers were overwhelmed by disjointed discovery and booking experiences. Our research showed people needed a seamless path from inspiration to reservation, with clear options and reassuring context along the way. I focused on reducing friction — simplifying the search, structuring information clearly, and guiding users step-by-step from discovery to booking. The experience was designed to feel lightweight, intuitive, and decision-friendly."
      },
      {
        type: "text",
  
        content: "` I focused on reducing friction — simplifying the search, structuring information clearly, and guiding users step-by-step from discovery to booking. The experience was designed to feel lightweight, intuitive, and decision-friendly."
      },
         {
        type: "text",
        title: "How Ai Helped",
        content: "AI was used to quickly explore layout variations, generate copy directions, and test multiple UX flows early. It helped speed up iteration while allowing me to focus on refining usability and overall experience quality.."
      },
      {
        type: "text",
        title: "Check this out ",
        content: "Here you can see the product .",
        linkUrl: "https://www.viacation.com/"
      },
      
      {
        type: "image",
        src: "/images/Bottom Viacation.png",
        alt: "Viacation product image"
      }
    ]
  },
  {
    slug: "one-turf-news",
    title: "One Turf News Web & Mobile App",
    description:
      "Designed for leading sports brand such as One Turf News, served over 2M users. Worked on improving user engagement, streamlining navigation, and creating scalable design",
    year: "2025",
    tags: ["News","Web","App", "Figma"],
    placeholderClass: "bg-[#f0ede6]",
    placeholderContent: "OTN Cover.png",
    
    heroImage: "/images/OTN Detail Cover.png",
    role: "Product Designer",
    timeline: "2024 - 2025",
    team: ["3 Designers", "5 Engineers"],
    overview: "Sports news platform serving 2M+ users.",
    
    sections: [
      { type: "text", title: "The Challenge", 
        content: "F1 content is dense — stats, updates, and race insights often feel scattered and hard to consume. Users want quick insights without losing depth, especially during live or high-intensity moments.." 
      }
      ,{
        type: "text",
        title: "How we encountered",
        content: "I focused on simplifying how information is presented — structuring content into clear sections, improving visual hierarchy, and making scanning effortless. The goal was to balance data-heavy content with readability, so users can quickly understand what matters without feeling overwhelmed."
      },
      {
        type: "text",
        title: "Impact",
        content: `- Improved content clarity and readability
- Faster information scanning during race moments
- More engaging, structured sports consumption experience`
      },
      {
        type: "text",
        title: "Check this out ",
        content: "Here you can see the product .",
        linkUrl: "https://www.oneturf.news/formula1-racing"
      },
      {
        type: "image",
        src: "/images/OTN F1 Bottom.png",
        alt: "One Turf News F1 product image"
      }
    ]
  },
    {
    slug: "",
    title: "Glocoach",
    description:
      "Designed and built a personal note-taking app for deep work — minimal, keyboard-first, and fast. Ships as a native macOS app.",
    year: "2023",
    tags: ["macOS", "Side Project"],
    placeholderClass: "bg-[#e8f0fe]",
    placeholderContent: undefined,
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80",
    role: "Designer & Developer",
    timeline: "2023",
    team: ["Solo project"],
    overview: "Minimal, keyboard-first note-taking app for deep work.",
    sections: [
      { type: "text", title: "Philosophy", content: "Minimal and fast, keyboard-centric design." }
    ]
  },
  {
    slug: "orbit-analytics",
    title: "Rural Development (UX Research)",
    description:
      "Redesigned a complex B2B analytics dashboard — distilling seven years of accumulated interface debt into a clear, fast, and genuinely pleasant data tool.",
    year: "2023",
    tags: ["Tourism", "System Design", "UX"],
    placeholderClass: "bg-[#0d1117]",
    placeholderContent: "Rural developement.png",
    heroImage: "/images/Rural developement hero image.png",
    role: "UX Designer",
    timeline: "2023",
    team: ["4 Designers", "2 Engineers"],
    overview: "A research-driven project focused on understanding how design can help promote sustainable rural tourism in Bisoi, a small village in Uttarakhand. The project explored how digital experiences could create awareness while preserving the village’s local identity and culture.",
    sections: [
      { type: "text", title: "The Challenge", 
        content: "Bisoi had tourism potential, but most visitors only knew about a single attraction. The bigger challenge was understanding local behavior, traveler expectations, and how to create awareness without disrupting the authenticity of the place." }
      ,{
        type: "text",
        title: "How we encountered",
        content: "We conducted on-ground research, interviews, and behavioral analysis to identify opportunities around rural tourism and digital accessibility. The final solution focused on showcasing local experiences, improving discoverability, and creating a more structured travel experience around the village ecosystem."
      },
      {
        type: "text",
        title: "Impact",
        content: `- Deeper understanding of research-led design
- Practical exposure to field interviews and ethnographic research
- Built a system-thinking approach toward tourism and community experiences`
      },
      {
        type: "text",
        title: "Check this out ",
        content: "Here you can see the project .",
        linkUrl: "https://www.behance.net/gallery/171121323/UX-Research-Rural-Development-in-Bisoi"
      },
      ,{
        type: "text",
        title: "Some Solution Glimpse",
        content: "Here are some glimpses of the solution that we proposed to ministry of tourism of Uttarakhand later also."
      },
      {
        type: "image",
        src: "/images/Rural developement Project 1.png",
        alt: "One Turf News F1 product image"
      }
      
      ,{
        type: "image",
        src: "/images/Rural developement Project 12.png",
        alt: "One Turf News F1 product image"
      }
    ]
  },

  
];

export interface Essay {
  title: string;
  href: string;
  date: string;
}

export const ESSAYS: Essay[] = [
  {
    title: "Vibecoding Is Changing How Product Designers Work",
    href: "#",
    date: "Mar 2026",
  },
  {
    title: "Why great products feel inevitable in retrospect",
    href: "#",
    date: "Jan 2025",
  },
  {
    title: "Designing for forgetting",
    href: "#",
    date: "Oct 2024",
  },
  {
    title: "The case for constraints: why less scope ships faster",
    href: "#",
    date: "Jul 2024",
  },
  {
    title: "What a morning run taught me about user flows",
    href: "#",
    date: "Mar 2024",
  },
  {
    title: "Notes on shipping your first thing in code",
    href: "#",
    date: "Nov 2023",
  },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:alex@example.com", icon: "email" },
  { label: "X / Twitter", href: "https://x.com", icon: "x" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
] as const;

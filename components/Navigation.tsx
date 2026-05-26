"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Essay", href: "#essay" },
  { label: "Process", href: "#process" },
  { label: "A Life", href: "#A-Life" },
  { label: "Connect", href: "#connect" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    
    // If on a different page, navigate to home first
    if (window.location.pathname !== "/") {
      window.location.href = href;
      return;
    }
    
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#e4e4e4] bg-[#fafafa]/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="flex w-full items-center px-4 py-6 md:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="font-serif text-[20px] italic text-ink tracking-tight hover:text-muted transition-colors duration-200"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          Arun Pratap Singh Rathore
        </a>

        <div className="flex-1 flex justify-end">
          <ul
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            className={`${
              open ? "flex" : "hidden"
            } absolute inset-x-6 top-full z-40 font-serif text-[17px] italic text-ink tracking-tight flex-col gap-5 rounded-[2rem] border-t border-[#e4e4e4] bg-white px-6 py-8 shadow-xl transition-all duration-200 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none`
          }
         
          >
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="block text-[1.5rem] font-medium  tracking-[0.12em] text-ink transition-colors duration-200 hover:text-ink md:text-[18px] md:font-light md:tracking-[0.12em] md:inline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-[#e4e4e4] bg-white text-ink transition-colors duration-200 hover:border-ink hover:text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}

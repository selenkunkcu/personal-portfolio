
import { useEffect, useState } from "react";
import { SiLintcode } from "react-icons/si";
import { BsDownload } from "react-icons/bs";

import { navItems } from "../data/content";


const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace("#", ""));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { threshold: [0.3, 0.5, 0.7] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 hidden md:block border-b border-background-light bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

          <a href="#home" className="group flex items-center gap-3">
            <span
              className="
                inline-flex h-11 px-4 items-center justify-center
                rounded-2xl bg-primary/15 text-primary
                transition-colors duration-200
                group-hover:bg-primary group-hover:text-white
              "
            >
              <SiLintcode className="text-lg" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-text-main">
              selen.dev
            </span>
          </a>

          <div className="flex">

              <ul className="hidden items-center gap-8 pr-8 md:flex">
              {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`
                        border-b-2 pb-1 text-sm font-medium transition-colors
                        ${activeSection === item.href
                          ? "border-primary text-primary"
                          : "border-transparent text-text-muted hover:border-primary hover:text-primary"}
                      `}
                    >
                      {item.label}
                    </a>
                  </li>
              ))}
              </ul>

              <a href="/selen-gokbel-resume.pdf" target="_blank" rel="noreferrer" 
                className="inline-flex bg-primary p-1 pr-3 pl-3 rounded-lg text-white items-center
                transition-all duration-200 hover:bg-violet-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
              >
                  <span className="mr-3">View CV</span>
                  <BsDownload size={20} />
              </a>
          </div>

        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed inset-x-0 bottom-0 z-50 md:hidden border-t border-slate-200 bg-white/90 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-6xl px-3 py-2">
          <ul className="flex items-center justify-between">
            {navItems.map((item) => (
              <li key={item.href} className="flex-1">
                <a
                  href={item.href}
                  className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-[11px] font-medium transition
                    ${activeSection === item.href
                      ? "text-primary"
                      : "text-text-muted hover:text-primary"
                    }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition
                      ${activeSection === item.href ? "bg-primary" : "bg-transparent"}
                    `}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

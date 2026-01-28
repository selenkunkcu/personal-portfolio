import { SiLintcode } from "react-icons/si";
import { BsDownload } from "react-icons/bs";

import { navItems } from "../data/content";

const Navbar = ({ activeSection }) => {
  return (
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

          <a
            href="/selen-gokbel-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex bg-primary p-1 pr-3 pl-3 rounded-lg text-white items-center
            transition-all duration-200 hover:bg-violet-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
          >
            <span className="mr-3">View CV</span>
            <BsDownload size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

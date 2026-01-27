import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        {/* left */}
        <div className="space-y-1">
          <p className="text-sm text-text-muted">
            © {year} <span className="font-semibold text-text-main">Selen</span>. All rights reserved.
          </p>

          <p className="text-xs text-text-muted">
            Built with <span className="font-medium text-text-main">React</span> +{" "}
            <span className="font-medium text-text-main">Tailwind</span>
          </p>
        </div>

        {/* right */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/selenkunkcu/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-text-muted shadow-sm transition hover:border-primary hover:text-primary"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-lg" />
          </a>

          <a
            href="https://github.com/selenkunkcu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-text-muted shadow-sm transition hover:border-primary hover:text-primary"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>

          <a
            href="https://medium.com/@selenkunkcu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-text-muted shadow-sm transition hover:border-primary hover:text-primary"
            aria-label="Medium"
          >
            <FaMediumM className="text-lg" />
          </a>

          <span className="mx-1 hidden h-6 w-px bg-slate-200 sm:block" />

          <a href="#home" className="inline-flex items-center gap-1 text-sm font-medium text-text-muted transition hover:border-primary hover:text-primary">
            Back to top
            <FiArrowUpRight className="text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

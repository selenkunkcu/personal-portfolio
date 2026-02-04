import { FiArrowDown, FiDownload,  FiTerminal,} from "react-icons/fi";
import { SiReact, SiTypescript, SiNodedotjs, SiJavascript, SiPostgresql,} from "react-icons/si";

const techItems = [
  { label: "React", icon: <SiReact className="text-sky-500" /> },
  { label: "TypeScript", icon: <SiTypescript className="text-sky-600" /> },
  { label: "JavaScript", icon: <SiJavascript className="text-purple-500" /> },
  { label: "PostgreSQL", icon: <SiPostgresql className="text-green-500" /> },
  { label: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
];

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute -top-[20%] -right-[10%] h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-[45%] -left-[15%] h-[260px] w-[260px] rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16 md:mt-20">

        <div className="z-10 flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-5">

            <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary md:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for work
            </div>

            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-text-main md:text-6xl">
              Hi, I'm Selen 👋
              <br />
              <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-text-muted md:mx-0 md:text-lg">
                I craft high-performance, user-focused web applications.{" "}
                <br className="hidden sm:block"/>
                Let’s build something meaningful together.
            </p>
          </div>

          <div className="flex flex-nowrap justify-center gap-2 md:gap-4 md:justify-start">
            <a
              href="#projects"
              className="flex h-10 md:h-12 min-w-0 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-violet-700 sm:h-12 sm:px-8 sm:text-base"
            >
              <span className="truncate">View Projects</span>
              <FiArrowDown className="text-[16px] sm:text-[18px]" />
            </a>

            <a
              href="/selen-gokbel-resume.pdf"
              download
              className="flex h-10 md:h-12 min-w-0 items-center justify-center gap-2 rounded-lg border border-[#e7ebf3] bg-white px-4 text-sm font-semibold text-text-main shadow-sm transition hover:bg-gray-50 sm:h-12 sm:px-8 sm:text-base"
            >
              <span className="truncate">Download CV</span>
              <FiDownload className="text-[16px] sm:text-[18px]" />
            </a>
          </div> 

          <div className="mt-6 border-t border-[#e7ebf3] pt-6">
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted"> Tech Stack </span>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                {techItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-lg border border-[#e7ebf3] bg-white px-3 py-2 text-sm font-medium text-text-main shadow-sm transition hover:border-primary/50 cursor-default"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="relative flex-1 items-center justify-center hidden md:block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/15 to-fuchsia-500/15 blur-3xl" />

          <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#e7ebf3] bg-white shadow-2xl">
            <div className="flex h-9 items-center gap-2 border-b border-[#e7ebf3] bg-gray-50 px-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="ml-4 w-full max-w-[200px] rounded bg-white px-3 py-1 text-[10px] font-mono text-gray-400">
                localhost:3000
              </div>
            </div>

            <div
              className="relative h-[260px] w-full bg-cover bg-center md:h-[320px]"
              style={{ backgroundImage:"url('images/coding.png')"}}
            >

              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-white/90 via-transparent to-transparent pb-6">
                <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiTerminal />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Latest Commit
                    </p>
                    <p className="text-sm font-semibold text-text-main">
                      Refactored Navbar Component
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Hero;

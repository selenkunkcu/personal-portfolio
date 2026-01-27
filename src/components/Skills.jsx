import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight, FiLayout, FiZap, FiShield, FiCode, FiSliders, FiSmartphone, FiGrid, FiDatabase, FiLink, FiServer} from "react-icons/fi";
import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiSass, SiTailwindcss, SiVite, SiNextdotjs, SiBootstrap, SiPostgresql, SiPython, SiFlask, SiNodedotjs, SiGit, SiPostman, SiGithub, } from "react-icons/si";

import SkillCard from "./common/SkillCard";
import ServiceCard from "./common/ServiceCard";
import { skillsContent } from "../data/content";

const serviceIconMap = {
  sliders: <FiSliders className="text-lg" />,
  smartphone: <FiSmartphone className="text-lg" />,
  shield: <FiShield className="text-lg" />,
  grid: <FiGrid className="text-lg" />,
  database: <FiDatabase className="text-lg" />,
  link: <FiLink className="text-lg" />,
};

const techIconMap = {
  react: <SiReact />,
  next: <SiNextdotjs />,
  vite: <SiVite />,
  js: <SiJavascript />,
  ts: <SiTypescript />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  sass: <SiSass />,
  tailwind: <SiTailwindcss />,
  bootstrap: <SiBootstrap />,
  postgres: <SiPostgresql />,
  node: <SiNodedotjs />,
  python: <SiPython />,
  flask: <SiFlask />,
  git: <SiGit />,
  github: <SiGithub />,
  postman: <SiPostman />,
};


const Skills = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const onPrev = () => emblaApi?.scrollPrev();
  const onNext = () => emblaApi?.scrollNext();

    const services = skillsContent.services.map((service) => ({
    ...service,
    icon: serviceIconMap[service.iconKey],
  }));

  const frontendSkills = skillsContent.frontendSkills.map((skill) => ({
    ...skill,
    icon: techIconMap[skill.iconKey],
  }));

  const backendTools = skillsContent.backendTools.map((skill) => ({
    ...skill,
    icon: techIconMap[skill.iconKey],
  }));

  return (
    <div className="w-full">

      <div className="mb-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-text-main md:text-4xl">
              What I can do for you
            </h2>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-text-muted shadow-sm transition hover:text-primary"
              aria-label="Previous service"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-text-muted shadow-sm transition hover:text-primary"
              aria-label="Next service"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>
        
        <div className="mt-7 overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="shrink-0 w-[85%] sm:w-[55%] md:w-[calc((100%-2rem)/3)] pl-4"
              >
                <ServiceCard icon={s.icon} title={s.title} desc={s.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="space-y-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FiLayout className="text-lg" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-text-main">Frontend</h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-5">
            {frontendSkills.map((it) => (
              <SkillCard key={it.name} name={it.name} icon={it.icon} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FiServer className="text-lg" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-text-main">Backend & Tools</h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-5">
            {backendTools.map((it) => (
              <SkillCard key={it.name} name={it.name} icon={it.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

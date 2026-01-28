import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import foodiesImg from "../../assets/projects/foodies2.png";
import tictactoeImg from "../../assets/projects/tictactoe1.png";
import todolistImg from "../../assets/projects/todolist1.png";
import snapgramImg from "../../assets/projects/snapgram1.png";
import nextnewsImg from "../../assets/projects/nextnews1.png";
import netflixImg from "../../assets/projects/netflix1.png";

const ProjectCard = ({ p }) => {

  const imageMap = {
    foodies: foodiesImg,
    tictactoe: tictactoeImg,
    todolist: todolistImg,
    snapgram: snapgramImg,
    nextnews: nextnewsImg,
    netflix: netflixImg,
  };

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-primary/40 hover:shadow-md md:flex-row">
      {/* image */}
      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 md:h-28 md:w-64">

        <img
          src={imageMap[p.imageKey]}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col justify-between gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-text-main transition-colors group-hover:text-primary">
              {p.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-text-muted">{p.desc}</p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {p.sourceUrl && (
              <a
                href={p.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-50 hover:text-primary"
                aria-label="Source Code"
              >
                <FaGithub className="text-lg" />
              </a>
            )}
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-50 hover:text-primary"
                aria-label="Live Demo"
              >
                <FiExternalLink className="text-lg" />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard
import ProjectCard from "./common/ProjectCard";
import { projects } from "../data/content";


const Projects = () => {
  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text-main md:text-4xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-1 max-w-2xl text-text-muted">
          A selection of projects demonstrating my focus on performance and UI/UX details.
        </p>
      </div>

      {/* scroll area */}
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-3xl border border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur-sm sm:p-6">
          <div
            className="
              space-y-4 overflow-y-auto pr-2
              h-[calc(100vh-260px)] md:h-[calc(100vh-300px)]
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-slate-200
              hover:[&::-webkit-scrollbar-thumb]:bg-slate-300
            "
          >
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

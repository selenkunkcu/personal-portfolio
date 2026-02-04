import { FiBriefcase, FiCode } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";

import { timelineItems } from "../data/content";

const Experience = () => {
  const iconMap = {
    FiBriefcase: FiBriefcase,
    FiCode: FiCode,
    FaGraduationCap: FaGraduationCap,
  };

  return (
    <div className="w-full">
      <div className="mb-4 mt-8 md:mb-8 md:mt-0">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-main md:text-4xl">
          Experience & Education
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-200" />

        <div className="flex flex-col">
          {timelineItems.map((item, index) => {
            const Icon = iconMap[item.iconKey];
            const isLast = index === timelineItems.length - 1;

            return (
              <div
                key={item.title}
                className={`group relative grid grid-cols-[40px_1fr] gap-x-2 md:gap-x-6 ${ isLast ? "pb-2" : "pb-10"}`}
              >
                <div className="relative z-10 flex flex-col items-center pt-1">
                  <div
                    className={[
                      "flex size-10 items-center justify-center rounded-full border-2 bg-white shadow-sm transition-all duration-300 group-hover:scale-110",
                      item.highlight
                        ? "border-primary text-primary "
                        : "border-slate-200 text-text-muted group-hover:border-primary group-hover:text-primary",
                    ].join(" ")}
                  >
                    {Icon ? <Icon className="text-[18px]" /> : null}
                  </div>
                </div>

                <div className="flex flex-col pt-1">
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-text-main">
                      {item.title}
                    </h3>
                    <span
                      className={[
                        "hidden md:inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium",
                         item.highlight ? "bg-primary/10 text-primary" : "bg-slate-100 text-text-muted"].join(" ")
                        }
                    >
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center mb-3">
                    <p className="text-sm font-medium text-text-muted mr-3 md:mr-0">
                      {item.company}
                    </p>
                    <span
                        className={[
                          "inline-flex md:hidden items-center rounded-full px-3 py-0.5 text-xs font-medium",
                          item.highlight ? "bg-primary/10 text-primary" : "bg-slate-100 text-text-muted"].join(" ")
                          }
                      >
                        {item.period}
                      </span>
                  </div>
                  
                  {item.bullets?.[0]?.project  ?
                    <ul className="ml-4 list-outside list-disc space-y-1.5 text-sm leading-relaxed font-medium">
                      {item.bullets.map((bullet) => (
                        <li key={bullet.project} className="mb-4">
                          {bullet.project}
                            <ul className="ml-4 list-outside list-disc space-y-1.5 text-sm leading-relaxed text-text-muted">
                              {bullet.items.map((itm) => (
                                <li key={itm}>{itm}</li>
                              ))}
                            </ul>
                        </li>
                      ))}
                    </ul> 
                    :
                    <ul className="ml-4 list-outside list-disc space-y-1.5 text-sm leading-relaxed text-text-muted">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Experience;

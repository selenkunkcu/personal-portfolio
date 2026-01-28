import { FiMapPin, FiBriefcase, FiHeart, FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="order-2 flex flex-col gap-8 lg:order-1 lg:col-span-7">
          <div className="space-y-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Who am I
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-text-main md:text-4xl">
              About Me
            </h2>
 
            <div className="space-y-4 text-base leading-relaxed text-text-muted md:text-lg">
              <p>
                I’m a frontend-focused software engineer who enjoys building clean, scalable, and easy-to-maintain interfaces for modern web applications. 
                I like working at the point where design meets engineering and turning ideas into products people actually enjoy using.
              </p>
              <p>
                I care a lot about component structure, performance, and writing code that’s easy to understand and improve later. 
                In my projects, I try to keep things simple, predictable, and well organized — both in the UI and in the codebase.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-6 border-t border-[#e5e7eb] pt-6 sm:grid-cols-2 md:grid-cols-3">

            <div className="flex flex-col gap-2">
              <div className="mb-1 flex items-center gap-2 text-primary">
                <FiMapPin className="text-lg" />
                <span className="text-xs font-bold uppercase tracking-wide text-text-muted">
                  Location
                </span>
              </div>
              <p className="font-medium text-text-main">Izmir, Türkiye</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="mb-1 flex items-center gap-2 text-primary">
                <FiBriefcase className="text-lg" />
                <span className="text-xs font-bold uppercase tracking-wide text-text-muted">
                  Working Style
                </span>
              </div>
              <p className="font-medium text-text-main">Remote / Hybrid</p>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2 md:col-span-1">
              <div className="mb-1 flex items-center gap-2 text-primary">
                <FiHeart className="text-lg" />
                <span className="text-xs font-bold uppercase tracking-wide text-text-muted">
                  Interests
                </span>
              </div>
              <p className="font-medium text-text-main">
                UI/UX, clean code, performance
              </p>
            </div>
          </div>

          <div className="pt-4">
            <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-text-main transition-colors hover:text-primary cursor-pointer">
              <span>Get in touch</span>
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>


        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
          <div className="relative aspect-square w-full max-w-md">

            <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl bg-primary/10 -z-10" />
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl border-2 border-primary/20 -z-10" />
            <div
              className="h-full w-full rounded-2xl bg-cover bg-center shadow-xl grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
              style={{backgroundImage:"url('images/profile.png')",}}
              aria-label="Developer portrait"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

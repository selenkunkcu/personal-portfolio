import { navItems } from "../data/content";

const MobileBottomNav = ({ activeSection }) => {
  return (

    <nav className="fixed inset-x-0 bottom-0 z-50 md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_18px_rgba(15,23,42,0.08)]">
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
  );
};

export default MobileBottomNav;

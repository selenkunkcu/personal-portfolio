import { useEffect, useState } from "react";

const useActiveSection = (items, defaultHash = "#home") => {
  const [activeSection, setActiveSection] = useState(defaultHash);

  useEffect(() => {
    const ids = items.map((i) => i.href.replace("#", ""));
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

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return activeSection;
};

export default useActiveSection;

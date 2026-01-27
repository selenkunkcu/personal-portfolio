const SkillCard = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition hover:border-primary/30 cursor-default">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <span className="text-xl">{icon}</span>
      </div>
      <div className="text-sm font-semibold text-text-main">{name}</div>
    </div>
  );
};


export default SkillCard;
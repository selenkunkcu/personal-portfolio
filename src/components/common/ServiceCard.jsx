const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md cursor-default">
      <div className="flex items-center">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary mr-4">
        {icon}
      </div>
      <h3 className="text-base font-bold text-text-main">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{desc}</p>
    </div>
  );
};

export default ServiceCard;
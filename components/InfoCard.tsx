type InfoCardProps = {
  title: string;
  content: string;
};

export function InfoCard({ title, content }: InfoCardProps) {
  return (
    <article className="glass-panel rounded-2xl p-6 shadow-aura transition hover:-translate-y-1 hover:border-saffron/45">
      <h3 className="font-heading text-2xl font-semibold text-slate-50">{title}</h3>
      <p className="mt-3 leading-relaxed text-slate-300">{content}</p>
    </article>
  );
}

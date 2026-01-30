export default function FeatureCard({ title, subtitle, children }) {
  return (
    <section className="card">
      <div className="card-head">
        <h2 className="card-title">{title}</h2>
        {subtitle ? <p className="card-subtitle">{subtitle}</p> : null}
      </div>
      <div className="card-body">{children}</div>
    </section>
  );
}

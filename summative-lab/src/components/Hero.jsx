function Hero({ projectCount }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="eyebrow">Personal Portfolio</p>
        <h1>Project Showcase</h1>
        <p className="hero__copy">
          A clean, responsive space to collect your best work, search through it
          quickly, and add new projects as your portfolio grows.
        </p>
      </div>

      <div className="hero__panel" aria-label="Portfolio summary">
        <span className="summary-number">{projectCount}</span>
        <span className="summary-label">Projects published</span>
      </div>
    </section>
  );
}

export default Hero;
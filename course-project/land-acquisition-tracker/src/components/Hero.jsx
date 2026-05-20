// Hero component shows the main message and call-to-action buttons
export default function Hero() {
  return (
    <section className="hero">
      <h1>Transparent Land Acquisition Tracking for Citizens</h1>
      <p>
        Citizens can track land acquisition cases, check compensation details,
        monitor objection status, and review payment updates in a simple
        government portal layout.
      </p>
      <div className="hero-actions">
        <button type="button" className="hero-button primary">
          Track Case
        </button>
        <button type="button" className="hero-button secondary">
          File Objection
        </button>
      </div>
    </section>
  );
}

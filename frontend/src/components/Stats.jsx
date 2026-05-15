import "../styles/Stats.css";

function Stats() {
  return (
    <section className="stats">

      <div className="stat-card">
        <h1>50K+</h1>
        <p>Reports Submitted</p>
      </div>

      <div className="stat-card">
        <h1>120+</h1>
        <p>Cities Covered</p>
      </div>

      <div className="stat-card">
        <h1>30K+</h1>
        <p>Active Citizens</p>
      </div>

      <div className="stat-card">
        <h1>₹10L+</h1>
        <p>Rewards Given</p>
      </div>

    </section>
  );
}

export default Stats;
import "../styles/slide4.css";

export default function Slide4() {
  return (
    <section className="slide4">
      <h1 className="slide4-title">
        Collaborating for a sustainable blue future
      </h1>

      <div className="slide4-grid">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop" />
          <h3>Geospatial Visualizations</h3>
          <p>
            Geospatial ocean visualizations map and analyze marine patterns like
            currents, temperature, and biodiversity.
          </p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" />
          <h3>AI + LLM Querying</h3>
          <p>
            Large Language Models translate natural language into optimized
            queries, giving researchers direct answers.
          </p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" />
          <h3>Natural Language Interface</h3>
          <p>
            Users can explore ocean trends without coding — just by asking
            questions in plain English.
          </p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" />
          <h3>Minimal & Interactive Dashboard</h3>
          <p>
            Dynamic charts and plots make it easy to track changes and uncover
            hidden patterns.
          </p>
        </div>
      </div>
    </section>
  );
}

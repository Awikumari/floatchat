import "../styles/slide3.css";

export default function Slide3() {
  return (
    <section className="slide3">
      <h1 className="slide3-title">
        We harness AI and ocean intelligence to transform raw data into
        actionable climate insights.
      </h1>

      <div className="slide3-content">
        <div className="left-label">What is this about:</div>

        <div className="columns">
          <div className="col">
            <h2>1.</h2>
            <p>
              Combines AI, data science, and ocean research to analyze complex
              marine data.
            </p>
          </div>

          <div className="divider"></div>

          <div className="col">
            <h2>2.</h2>
            <p>
              Supports researchers in understanding ocean patterns and tracking
              climate change.
            </p>
          </div>

          <div className="divider"></div>

          <div className="col">
            <h2>3.</h2>
            <p>
              Enables smarter, sustainable decisions for protecting and managing
              ocean resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

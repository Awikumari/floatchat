import "../styles/section.css";

export default function Hero() {
  return (
    <section className="section">
      <h1>
        WE MADE OCEANS <br />
        SPEAK OUR LANGUAGE
      </h1>

      <p>
        Explore vast and complex ocean data with the power of AI, transforming
        raw measurements into clear insights for research and sustainability.
      </p>

      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "80px",
          width: "85%",
          height: "1px",
          background: "#444",
        }}
      ></div>
    </section>
  );
}

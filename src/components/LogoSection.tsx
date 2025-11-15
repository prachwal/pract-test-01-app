export default function LogoSection() {
  return (
    <div className="d-flex justify-center items-center gap-5 mb-5 fade-in-up logos">
      <a
        href="https://vite.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="scale-hover shadow-hover logoLink"
      >
        <img
          src="/vite.svg"
          alt="Vite"
          style={{ width: "64px", height: "64px" }}
        />
      </a>

      <a
        href="https://preactjs.com"
        target="_blank"
        rel="noopener noreferrer"
        className="scale-hover shadow-hover logoLink"
      >
        <img
          src="/assets/preact.svg"
          alt="Preact"
          style={{ width: "64px", height: "64px" }}
        />
      </a>
    </div>
  );
}

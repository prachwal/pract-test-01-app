import { memo } from "preact/compat";

function LogoSection() {
  const logos = [
    {
      href: 'https://vite.dev',
      src: '/vite.svg',
      alt: 'Vite',
    },
    {
      href: 'https://preactjs.com',
      src: '/assets/preact.svg',
      alt: 'Preact',
    },
  ];

  return (
    <div className="d-flex justify-center items-center gap-5 mb-5 fade-in-up logos">
      {logos.map((logo, index) => (
        <a
          key={index}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="scale-hover shadow-hover logoLink"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            style={{ width: "64px", height: "64px" }}
          />
        </a>
      ))}
    </div>
  );
}

export default memo(LogoSection);
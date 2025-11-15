interface HeroSectionProps {
  count: number;
  onIncrement: () => void;
}

export default function HeroSection({ count, onIncrement }: HeroSectionProps) {
  return (
    <section id="home" className="container py-5 heroSection">
      {/* Logos */}
      <div className="d-flex justify-center items-center gap-5 mb-5 fade-in-up logos">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="scale-hover shadow-hover logoLink"
        >
          <img src="/vite.svg" alt="Vite" style={{ width: '64px', height: '64px' }} />
        </a>

        <a
          href="https://preactjs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="scale-hover shadow-hover logoLink"
        >
          <img src="/assets/preact.svg" alt="Preact" style={{ width: '64px', height: '64px' }} />
        </a>
      </div>

      <h2 className="heading text-center mb-4 text-primary text-5xl fade-in-up title">
        Lightning Fast Development
      </h2>

      <p className="text-center text-muted mb-5 fade-in-up text-xl description">
        Build modern web applications with Vite's blazing fast HMR and Preact's lightweight performance
      </p>

      {/* Counter Card */}
      <div className="fade-in-up counterContainer">
        <div className="card card--elevated card--padded">
          <div className="text-center">
            <div className="counterDisplay">
              <div className="text-primary font-bold" style={{
                fontSize: 'clamp(3rem, 10vw, 5rem)',
                lineHeight: '1',
                marginBottom: '0.5rem'
              }}>
                {count}
              </div>
              <div className="text-muted uppercase tracking-wider text-sm font-semibold">
                Click Counter
              </div>
            </div>

            <button
              className="button shadow-lg transition-medium incrementButton"
              onClick={onIncrement}
            >
              Increment Counter ⚡
            </button>

            <div className="editNote">
              <p className="text-muted m-0 text-sm">
                Edit <code className="bg-surface px-2 py-1 text-primary" style={{
                  borderRadius: '4px',
                  fontFamily: 'monospace'
                }}>src/app.tsx</code> and save to test HMR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
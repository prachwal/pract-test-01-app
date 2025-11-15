export default function FeaturesGrid() {
  return (
    <section id="features" className="container py-5 featuresSection">
      <h3 className="heading text-center mb-5 text-3xl sectionTitle">Why This Stack?</h3>
      <div className="gridContainer">
        {/* Row 1 */}
        <div className="gridRow">
          <div className="card scale-hover shadow-hover transition-medium featureCard">
            <div className="text-4xl mb-3 featureIcon">⚡</div>
            <h4 className="card__title text-xl font-bold featureTitle">Lightning Fast</h4>
            <p className="card__body text-muted m-0 featureDescription">Instant HMR and optimized builds</p>
          </div>
          <div className="card scale-hover shadow-hover transition-medium featureCard">
            <div className="text-4xl mb-3 featureIcon">🪶</div>
            <h4 className="card__title text-xl font-bold featureTitle">Lightweight</h4>
            <p className="card__body text-muted m-0 featureDescription">Only 3kB Preact core library</p>
          </div>
          <div className="card scale-hover shadow-hover transition-medium featureCard">
            <div className="text-4xl mb-3 featureIcon">🎯</div>
            <h4 className="card__title text-xl font-bold featureTitle">Modern DX</h4>
            <p className="card__body text-muted m-0 featureDescription">TypeScript, JSX, and ES modules</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="gridRow">
          <div className="card scale-hover shadow-hover transition-medium featureCard">
            <div className="text-4xl mb-3 featureIcon">🔧</div>
            <h4 className="card__title text-xl font-bold featureTitle">Zero Config</h4>
            <p className="card__body text-muted m-0 featureDescription">Works out of the box</p>
          </div>
          <div className="card scale-hover shadow-hover transition-medium featureCard">
            <div className="text-4xl mb-3 featureIcon">🎨</div>
            <h4 className="card__title text-xl font-bold featureTitle">Flexible</h4>
            <p className="card__body text-muted m-0 featureDescription">Use any CSS framework you want</p>
          </div>
          <div className="card scale-hover shadow-hover transition-medium featureCard">
            <div className="text-4xl mb-3 featureIcon">📦</div>
            <h4 className="card__title text-xl font-bold featureTitle">Optimized</h4>
            <p className="card__body text-muted m-0 featureDescription">Tree-shaking and code splitting</p>
          </div>
        </div>
      </div>
    </section>
  );
}
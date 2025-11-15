export default function FeaturesGrid() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Instant HMR and optimized builds' },
    { icon: '🪶', title: 'Lightweight', description: 'Only 3kB Preact core library' },
    { icon: '🎯', title: 'Modern DX', description: 'TypeScript, JSX, and ES modules' },
    { icon: '🔧', title: 'Zero Config', description: 'Works out of the box' },
    { icon: '🎨', title: 'Flexible', description: 'Use any CSS framework you want' },
    { icon: '📦', title: 'Optimized', description: 'Tree-shaking and code splitting' },
    { icon: '🌐', title: 'SEO Friendly', description: 'Pre-rendering and SSR support' },
    { icon: '🛠️', title: 'Extensible', description: 'Rich plugin ecosystem' },
  ];

  return (
    <section id="features" className="container py-5 featuresSection">
      <h3 className="heading text-center mb-5 text-3xl sectionTitle">Why This Stack?</h3>
      <div className="grid gridAutoFit">
        {features.map((feature, index) => (
          <div key={index} className="card scale-hover shadow-hover transition-medium featureCard">
            <div className="text-4xl mb-3 featureIcon">{feature.icon}</div>
            <h4 className="card__title text-xl font-bold featureTitle">{feature.title}</h4>
            <p className="card__body text-muted m-0 featureDescription">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
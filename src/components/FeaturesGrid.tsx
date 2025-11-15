interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  title?: string;
  features: Feature[];
}

export default function FeaturesGrid({ title = "Why This Stack?", features }: FeaturesGridProps) {
  return (
    <section id="features" className="container py-5 featuresSection">
      <h3 className="heading text-center mb-5 text-3xl sectionTitle">{title}</h3>
      <div className="grid gridAutoFit">
        {features.map((feature, index) => (
          <article key={index} className="card scale-hover shadow-hover transition-medium featureCard">
            <div className="text-4xl mb-3 featureIcon">{feature.icon}</div>
            <h4 className="card__title text-xl font-bold featureTitle">{feature.title}</h4>
            <p className="card__body text-muted m-0 featureDescription">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
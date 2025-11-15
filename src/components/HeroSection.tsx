import CounterCard from './CounterCard';
import LogoSection from './LogoSection';

interface HeroSectionProps {
  count: number;
  onIncrement: () => void;
}

export default function HeroSection({ count, onIncrement }: HeroSectionProps) {
  return (
    <section id="home" className="container py-5 heroSection">
      {/* Logos */}
      <LogoSection />

      <h2 className="heading text-center mb-4 text-primary text-5xl fade-in-up title">
        Lightning Fast Development
      </h2>

      <p className="text-center text-muted mb-5 fade-in-up text-xl description">
        Build modern web applications with Vite's blazing fast HMR and Preact's lightweight performance
      </p>

      {/* Counter Card */}
      <CounterCard count={count} onIncrement={onIncrement} />
    </section>
  );
}
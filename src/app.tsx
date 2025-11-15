import { useState } from "preact/hooks";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import Overlay from "@components/Overlay";
import HeroSection from "@components/HeroSection";
import FeaturesGrid from "@components/FeaturesGrid";
import Footer from "@components/Footer";
import { useTheme } from "@components/ThemeProvider";
import { useSidebar } from "@hooks/useSidebar";

export default function App() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Instant HMR and optimized builds",
    },
    {
      icon: "🪶",
      title: "Lightweight",
      description: "Only 3kB Preact core library",
    },
    {
      icon: "🎯",
      title: "Modern DX",
      description: "TypeScript, JSX, and ES modules",
    },
    { icon: "🔧", title: "Zero Config", description: "Works out of the box" },
    {
      icon: "🎨",
      title: "Flexible",
      description: "Use any CSS framework you want",
    },
    {
      icon: "📦",
      title: "Optimized",
      description: "Tree-shaking and code splitting",
    },
    {
      icon: "🌐",
      title: "SEO Friendly",
      description: "Pre-rendering and SSR support",
    },
    { icon: "🛠️", title: "Extensible", description: "Rich plugin ecosystem" },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header
        theme={theme}
        onToggleSidebar={openSidebar}
        onToggleTheme={toggleTheme}
      />

      <Overlay isVisible={isOpen} onClick={closeSidebar} />

      <Sidebar isOpen={isOpen} onClose={closeSidebar} />

      <article className="container my-10">
        <h2 className="heading text-center mb-4 text-4xl">
          Welcome to the Vite + Preact Stack!
        </h2>
        <p className="text-center text-muted mb-5 text-lg">
          This starter template combines the blazing fast development experience
          of Vite with the lightweight and efficient Preact library. Get started
          building your next web application with ease!
        </p>
        <HeroSection count={count} onIncrement={() => setCount(count + 1)} />
        <FeaturesGrid features={features} />
      </article>

      <Footer>
        <p className="mb-2 text-sm footerText">
          Check out{" "}
          <a
            href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline footerLink"
          >
            create-preact
          </a>
          , the official Preact + Vite starter
        </p>
        <p className="m-0 text-sm footerText">
          Click on the Vite and Preact logos to learn more
        </p>
      </Footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

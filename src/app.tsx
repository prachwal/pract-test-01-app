import { useState } from 'preact/hooks';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overlay from './components/Overlay';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useSidebar } from './hooks/useSidebar';

export default function App() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header
        theme={theme}
        onToggleSidebar={openSidebar}
        onToggleTheme={toggleTheme}
      />

      <Overlay
        isVisible={isOpen}
        onClick={closeSidebar}
      />

      <Sidebar
        isOpen={isOpen}
        onClose={closeSidebar}
      />

      <HeroSection
        count={count}
        onIncrement={() => setCount(count + 1)}
      />

      <FeaturesGrid />

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
import { memo } from 'preact/compat';
import { Signal } from '@preact/signals';
import ThemeButton from './ThemeButton';
import HamburgerButton from './HamburgerButton';

interface HeaderProps {
  theme: Signal<string>;
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  children?: preact.ComponentChildren;
}

function Header({ theme, onToggleSidebar, onToggleTheme, children }: HeaderProps) {
  return (
    <header className="header bg-surface border">
      {/* Hamburger Button */}
      <HamburgerButton onToggleSidebar={onToggleSidebar} />

      <TitleAndLogo />

      <ThemeButton onClick={onToggleTheme} theme={theme} />
      {children}
    </header>
  );
}

const TitleAndLogo = memo(() =>  {  
  return (
      <div className="logoContainer">
        <div className="logo">
          VP
        </div>
        <div className="titleContainer">
          <h1 className="heading m-0 text-xl title">
            <span className="md:inline hidden">Vite + Preact</span>
            {/* Usuwamy VP z tekstu na mobile */}
          </h1>
          <p className="text-muted m-0 text-sm subtitle">
            Modern Development Stack
          </p>
        </div>
      </div>
  );
});

export default memo(Header);
interface HeaderProps {
  theme: string;
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleSidebar, onToggleTheme }: HeaderProps) {
  return (
    <header className="header bg-surface border">
      {/* Hamburger Button */}
      <button
        className="button button--ghost hamburger"
        onClick={onToggleSidebar}
        aria-label="Open menu"
      >
        ☰
      </button>

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

      <button
        className="button button--outline themeToggle"
        onClick={onToggleTheme}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className="sidebar bg-surface border shadow-xl"
      style={{ left: isOpen ? 0 : '-280px' }}
    >
      {/* Sidebar Header */}
      <div className="sidebarHeader">
        <div className="sidebarHeaderContent">
          <div className="logo">
            VP
          </div>
          <span className="font-bold">Menu</span>
        </div>
        <button
          className="button button--ghost closeButton"
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="navigation">
        <ul className="navList">
          <li className="navItem">
            <a
              href="#home"
              className="navLink"
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span className="navIcon">🏠</span>
              <span className="font-semibold">Home</span>
            </a>
          </li>
          <li className="navItem">
            <a
              href="#features"
              className="navLink"
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span className="navIcon">⚡</span>
              <span className="font-semibold">Features</span>
            </a>
          </li>
          <li className="navItem">
            <a
              href="#counter"
              className="navLink"
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span className="navIcon">🔢</span>
              <span className="font-semibold">Counter</span>
            </a>
          </li>
          <li className="navItem">
            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="navLink"
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span className="navIcon">📚</span>
              <span className="font-semibold">Vite Docs</span>
            </a>
          </li>
          <li className="navItem">
            <a
              href="https://preactjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="navLink"
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span className="navIcon">⚛️</span>
              <span className="font-semibold">Preact Docs</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="sidebarFooter">
        <p className="text-muted text-sm m-0 text-center">
          Vite + Preact Stack<br/>
          <span className="text-xs">v1.0.0</span>
        </p>
      </div>
    </aside>
  );
}
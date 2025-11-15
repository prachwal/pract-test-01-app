import { Signal } from '@preact/signals';

declare const __APP_VERSION__: string;

interface SidebarProps {
  isOpen: Signal<boolean>;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigationItems = [
    { href: '#home', icon: '🏠', text: 'Home' },
    { href: '#features', icon: '⚡', text: 'Features' },
    { href: '#counter', icon: '🔢', text: 'Counter' },
    { 
      href: 'https://vitejs.dev', 
      icon: '📚', 
      text: 'Vite Docs',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { 
      href: 'https://preactjs.com', 
      icon: '⚛️', 
      text: 'Preact Docs',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
  ];

  return (
    <aside
      className={`sidebar bg-surface border shadow-xl ${isOpen.value ? 'sidebar--open' : ''}`}
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
          {navigationItems.map((item, index) => (
            <li key={index} className="navItem">
              <a
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="navLink"
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span className="navIcon">{item.icon}</span>
                <span className="font-semibold">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="sidebarFooter">
        <p className="text-muted text-sm m-0 text-center">
          Vite + Preact Stack<br/>
          <span className="text-xs">v{__APP_VERSION__}</span>
        </p>
      </div>
    </aside>
  );
}
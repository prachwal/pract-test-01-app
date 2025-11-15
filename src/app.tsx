import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 
             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header className="bg-surface border" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        gap: '1rem',
        flexWrap: 'nowrap',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(8px)',
        backgroundColor: 'var(--color-bg-1)'
      }}>
        {/* Hamburger Button */}
        <button 
          className="button button--ghost"
          onClick={() => setSidebarOpen(true)}
          style={{ 
            minWidth: 'auto',
            padding: '0.5rem',
            fontSize: '1.5rem',
            flexShrink: 0
          }}
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="d-flex items-center gap-3" style={{ flex: '1 1 auto', minWidth: 0 }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-hover))',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            fontSize: '20px',
            color: 'white',
            boxShadow: '0 4px 12px rgba(100, 108, 255, 0.3)',
            flexShrink: 0
          }}>
            VP
          </div>
          <div style={{ minWidth: 0, overflow: 'hidden' }}>
            <h1 className="heading m-0 text-xl" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Vite + Preact
            </h1>
            <p className="text-muted m-0 text-sm" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Modern Development Stack
            </p>
          </div>
        </div>
        
        <button 
          className="button button--outline" 
          onClick={toggleTheme}
          style={{ 
            minWidth: 'auto',
            padding: '0.5rem 0.75rem',
            fontSize: '0.875rem',
            flexShrink: 0
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fade"
          onClick={closeSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
            animation: 'fadeIn 0.2s ease'
          }}
        />
      )}

      {/* Sidebar */}
      <aside 
        className="bg-surface border shadow-xl"
        style={{
          position: 'fixed',
          top: 0,
          left: sidebarOpen ? 0 : '-280px',
          bottom: 0,
          width: '280px',
          zIndex: 999,
          transition: 'left 0.3s ease',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Sidebar Header */}
        <div className="p-4 border" style={{ 
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div className="d-flex items-center gap-2">
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-hover))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '14px',
              color: 'white'
            }}>
              VP
            </div>
            <span className="font-bold">Menu</span>
          </div>
          <button 
            className="button button--ghost"
            onClick={closeSidebar}
            style={{ 
              minWidth: 'auto',
              padding: '0.25rem 0.5rem',
              fontSize: '1.25rem'
            }}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-4" style={{ flex: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li className="mb-2">
              <a 
                href="#home" 
                className="d-flex items-center gap-3 p-3 transition-medium"
                style={{ 
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--color-text)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{ fontSize: '1.25rem' }}>🏠</span>
                <span className="font-semibold">Home</span>
              </a>
            </li>
            <li className="mb-2">
              <a 
                href="#features" 
                className="d-flex items-center gap-3 p-3 transition-medium"
                style={{ 
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--color-text)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{ fontSize: '1.25rem' }}>⚡</span>
                <span className="font-semibold">Features</span>
              </a>
            </li>
            <li className="mb-2">
              <a 
                href="#counter" 
                className="d-flex items-center gap-3 p-3 transition-medium"
                style={{ 
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--color-text)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{ fontSize: '1.25rem' }}>🔢</span>
                <span className="font-semibold">Counter</span>
              </a>
            </li>
            <li className="mb-2">
              <a 
                href="https://vitejs.dev" 
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex items-center gap-3 p-3 transition-medium"
                style={{ 
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--color-text)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{ fontSize: '1.25rem' }}>📚</span>
                <span className="font-semibold">Vite Docs</span>
              </a>
            </li>
            <li className="mb-2">
              <a 
                href="https://preactjs.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex items-center gap-3 p-3 transition-medium"
                style={{ 
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--color-text)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-bg)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{ fontSize: '1.25rem' }}>⚛️</span>
                <span className="font-semibold">Preact Docs</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border" style={{ 
          borderTop: '1px solid var(--color-border)'
        }}>
          <p className="text-muted text-sm m-0 text-center">
            Vite + Preact Stack<br/>
            <span className="text-xs">v1.0.0</span>
          </p>
        </div>
      </aside>

      {/* Hero Section */}
      <section id="home" className="container py-5">
        {/* Logos */}
        <div className="d-flex justify-center items-center gap-5 mb-5 fade-in-up">
          <a 
            href="https://vite.dev" 
            target="_blank"
            rel="noopener noreferrer"
            className="scale-hover shadow-hover"
            style={{
              width: '100px',
              height: '100px',
              background: 'var(--color-bg-1)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid var(--color-border)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 257" style={{ width: '64px', height: '64px' }}>
              <defs>
                <linearGradient id="viteLogo1" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
                  <stop offset="0%" stopColor="#41D1FF"/>
                  <stop offset="100%" stopColor="#BD34FE"/>
                </linearGradient>
                <linearGradient id="viteLogo2" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
                  <stop offset="0%" stopColor="#FFEA83"/>
                  <stop offset="8.333%" stopColor="#FFDD35"/>
                  <stop offset="100%" stopColor="#FFA800"/>
                </linearGradient>
              </defs>
              <path fill="url(#viteLogo1)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"/>
              <path fill="url(#viteLogo2)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"/>
            </svg>
          </a>
          
          <a 
            href="https://preactjs.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="scale-hover shadow-hover"
            style={{
              width: '100px',
              height: '100px',
              background: 'var(--color-bg-1)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid var(--color-border)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 296" style={{ width: '64px', height: '64px' }}>
              <path fill="#673AB8" d="m128 0l128 73.9v147.8l-128 73.9L0 221.7V73.9z"/>
              <path fill="#FFF" d="M34.865 220.478c17.016 21.78 71.095 5.185 122.15-34.704c51.055-39.888 80.24-88.345 63.224-110.126c-17.017-21.78-71.095-5.184-122.15 34.704c-51.055 39.89-80.24 88.346-63.224 110.126Zm7.27-5.68c-5.644-7.222-3.178-21.402 7.573-39.253c11.322-18.797 30.541-39.548 54.06-57.923c23.52-18.375 48.303-32.004 69.281-38.442c19.922-6.113 34.277-5.075 39.92 2.148c5.644 7.223 3.178 21.403-7.573 39.254c-11.322 18.797-30.541 39.547-54.06 57.923c-23.52 18.375-48.304 32.004-69.281 38.441c-19.922 6.114-34.277 5.076-39.92-2.147Z"/>
              <path fill="#FFF" d="M220.239 220.478c17.017-21.78-12.169-70.237-63.224-110.126C105.96 70.464 51.88 53.868 34.865 75.648c-17.017 21.78 12.169 70.238 63.224 110.126c51.055 39.889 105.133 56.485 122.15 34.704Zm-7.27-5.68c-5.643 7.224-19.998 8.262-39.92 2.148c-20.978-6.437-45.761-20.066-69.28-38.441c-23.52-18.376-42.74-39.126-54.06-57.923c-10.752-17.851-13.218-32.03-7.575-39.254c5.644-7.223 19.999-8.261 39.92-2.148c20.978 6.438 45.762 20.067 69.281 38.442c23.52 18.375 42.739 39.126 54.06 57.923c10.752 17.85 13.218 32.03 7.574 39.254Z"/>
              <circle fill="#FFF" cx="127.5" cy="148" r="20"/>
            </svg>
          </a>
        </div>

        <h2 className="heading text-center mb-4 text-primary text-5xl fade-in-up" style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '1.5rem'
        }}>
          Lightning Fast Development
        </h2>
        
        <p className="text-center text-muted mb-5 fade-in-up text-xl" style={{ 
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: '1.6'
        }}>
          Build modern web applications with Vite's blazing fast HMR and Preact's lightweight performance
        </p>

        {/* Counter Card */}
        <div id="counter" style={{ maxWidth: '600px', margin: '0 auto' }} className="mb-5 fade-in-up">
          <div className="card card--elevated card--padded">
            <div className="text-center">
              <div className="mb-4">
                <div className="text-primary font-bold" style={{ 
                  fontSize: 'clamp(3rem, 10vw, 5rem)',
                  lineHeight: '1',
                  marginBottom: '0.5rem'
                }}>
                  {count}
                </div>
                <div className="text-muted uppercase tracking-wider text-sm font-semibold">
                  Click Counter
                </div>
              </div>

              <button 
                className="button shadow-lg transition-medium"
                onClick={() => setCount(count + 1)}
                style={{ 
                  width: '100%',
                  padding: '1rem 2rem',
                  fontSize: '1.125rem'
                }}
              >
                Increment Counter ⚡
              </button>

              <div className="mt-4 pt-4 border">
                <p className="text-muted m-0 text-sm">
                  Edit <code className="bg-surface px-2 py-1 text-primary" style={{
                    borderRadius: '4px',
                    fontFamily: 'monospace'
                  }}>src/app.tsx</code> and save to test HMR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container py-5">
        <h3 className="heading text-center mb-5 text-3xl">Why This Stack?</h3>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Row 1 */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div className="card scale-hover shadow-hover transition-medium" style={{ minHeight: '160px' }}>
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="card__title text-xl font-bold">Lightning Fast</h4>
              <p className="card__body text-muted m-0">Instant HMR and optimized builds</p>
            </div>
            <div className="card scale-hover shadow-hover transition-medium" style={{ minHeight: '160px' }}>
              <div className="text-4xl mb-3">🪶</div>
              <h4 className="card__title text-xl font-bold">Lightweight</h4>
              <p className="card__body text-muted m-0">Only 3kB Preact core library</p>
            </div>
            <div className="card scale-hover shadow-hover transition-medium" style={{ minHeight: '160px' }}>
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="card__title text-xl font-bold">Modern DX</h4>
              <p className="card__body text-muted m-0">TypeScript, JSX, and ES modules</p>
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            <div className="card scale-hover shadow-hover transition-medium" style={{ minHeight: '160px' }}>
              <div className="text-4xl mb-3">🔧</div>
              <h4 className="card__title text-xl font-bold">Zero Config</h4>
              <p className="card__body text-muted m-0">Works out of the box</p>
            </div>
            <div className="card scale-hover shadow-hover transition-medium" style={{ minHeight: '160px' }}>
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="card__title text-xl font-bold">Flexible</h4>
              <p className="card__body text-muted m-0">Use any CSS framework you want</p>
            </div>
            <div className="card scale-hover shadow-hover transition-medium" style={{ minHeight: '160px' }}>
              <div className="text-4xl mb-3">📦</div>
              <h4 className="card__title text-xl font-bold">Optimized</h4>
              <p className="card__body text-muted m-0">Tree-shaking and code splitting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-5 border" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="text-center text-muted">
          <p className="mb-2 text-sm">
            Check out{' '}
            <a
              href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              create-preact
            </a>
            , the official Preact + Vite starter
          </p>
          <p className="m-0 text-sm">Click on the Vite and Preact logos to learn more</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import { themeSignal, toggleTheme } from '@utils/theme';

interface ThemeContextType {
  theme: typeof themeSignal;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themeSignal,
  toggleTheme,
});

export function ThemeProvider({ children }: { children: preact.ComponentChildren;}) {
  return (
    <ThemeContext.Provider value={{ theme: themeSignal, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
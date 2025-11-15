import { signal, effect } from '@preact/signals';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') ||
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  return 'dark';
};

const themeSignal = signal(getInitialTheme());

effect(() => {
  document.documentElement.setAttribute('data-theme', themeSignal.value);
  localStorage.setItem('theme', themeSignal.value);
});

export function useTheme() {
  const toggleTheme = () => {
    themeSignal.value = themeSignal.value === 'dark' ? 'light' : 'dark';
  };

  return { theme: themeSignal, toggleTheme };
}
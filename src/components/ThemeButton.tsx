import type { Signal } from "@preact/signals";
import { memo } from "preact/compat";

type ThemeButtonProps = {
  onClick: () => void;
  theme: Signal<string>;
};

function ThemeButton({ onClick, theme }: ThemeButtonProps) {
  const getThemeIcon = () => {
    switch (theme.value) {
      case 'dark':
        return '☀️'; // Sun for switching to light
      case 'light':
        return '🌙'; // Moon for switching to auto
      case 'auto':
        return '🖥️'; // Computer/monitor for switching to dark
      default:
        return '🌙';
    }
  };

  return (
    <button
      className="button button--outline themeToggle"
      onClick={onClick}
      title={`Current theme: ${theme.value}`}
    >
      {getThemeIcon()}
    </button>
  );
}

export default memo(ThemeButton);
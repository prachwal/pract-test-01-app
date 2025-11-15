import { memo } from "preact/compat";

type HamburgerButtonProps = {
  onToggleSidebar: () => void;
};

function HamburgerButton({ onToggleSidebar }: HamburgerButtonProps) {
  return (
    <button
      className="button button--ghost hamburger"
      onClick={onToggleSidebar}
      aria-label="Open menu"
    >
      ☰
    </button>
  );
}

export default memo(HamburgerButton);
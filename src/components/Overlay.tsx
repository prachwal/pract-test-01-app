interface OverlayProps {
  isVisible: boolean;
  onClick: () => void;
}

export default function Overlay({ isVisible, onClick }: OverlayProps) {
  if (!isVisible) return null;

  return (
    <div
      className="fade"
      onClick={onClick}
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
  );
}
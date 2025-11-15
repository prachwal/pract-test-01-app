import { useState, useEffect } from 'preact/hooks';

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return { isOpen, openSidebar, closeSidebar };
}
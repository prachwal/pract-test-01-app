import { signal, effect } from '@preact/signals';

const isOpenSignal = signal(false);

effect(() => {
  if (isOpenSignal.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => {
    document.body.style.overflow = '';
  };
});

export function useSidebar() {
  const openSidebar = () => isOpenSignal.value = true;
  const closeSidebar = () => isOpenSignal.value = false;

  return { isOpen: isOpenSignal, openSidebar, closeSidebar };
}
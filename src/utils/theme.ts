import { signal, effect } from "@preact/signals";

export const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "auto";
  }
  return "dark";
};

export const themeSignal = signal(getInitialTheme());

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

effect(() => {
  const currentTheme = themeSignal.value;
  const appliedTheme = currentTheme === "auto" ? getSystemTheme() : currentTheme;
  document.documentElement.setAttribute("data-theme", appliedTheme);
  localStorage.setItem("theme", currentTheme);
});

export const toggleTheme = () => {
  const current = themeSignal.value;
  if (current === "dark") {
    themeSignal.value = "light";
  } else if (current === "light") {
    themeSignal.value = "auto";
  } else {
    themeSignal.value = "dark";
  }
};

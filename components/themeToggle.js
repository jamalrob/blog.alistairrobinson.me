import { useEffect, useState } from "react";
import styles from '@/styles/themeToggle.module.css';

const IconLight = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    aria-hidden="true"
  >
    {/* Circle outline */}
    <circle cx="12" cy="12" r="9" />
    {/* Left half fill */}
    <path d="M12 3 A9 9 0 0 0 12 21 Z" fill="currentColor" stroke="none" />
  </svg>
);

const IconDark = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    aria-hidden="true"
  >
    {/* Circle outline */}
    <circle cx="12" cy="12" r="9" />
    {/* Right half fill */}
    <path d="M12 3 A9 9 0 0 1 12 21 Z" fill="currentColor" stroke="none" />
  </svg>
);

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  // Button handler
  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  // Avoid mismatch on first paint
  if (!theme) return null;

return (
  <button
    onClick={toggleTheme}
    className={styles.toggle}
    title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
  >
    {theme === "light" ? <IconDark /> : <IconLight />}
  </button>
);

}

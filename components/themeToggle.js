import { useEffect, useState } from "react";
import styles from '@/styles/themeToggle.module.css';

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
      {theme === "light" ? "◐" : "◑"}
    </button>
  );
}

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const STORAGE_KEY = 'theme';
const THEME_COLORS = { dark: '#09090d', light: '#f6f6fa' };

function getTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
}

function getStored() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(getTheme);

  // Follow the OS setting until the visitor picks a theme themselves.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => {
      if (getStored()) return;
      const next = e.matches ? 'light' : 'dark';
      applyTheme(next);
      setTheme(next);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  };

  const isLight = theme === 'light';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
      className={`p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-tint/[0.05] transition-colors ${className}`}
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    const getSystemTheme = () => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const applyTheme = (newTheme) => {
      const resolved = newTheme === 'system' ? getSystemTheme() : newTheme;
      setResolvedTheme(resolved);
      
      root.classList.remove('light', 'dark');
      root.classList.add(resolved);
      localStorage.setItem('theme', newTheme);
    };

    applyTheme(theme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    // Simply toggle between light and dark based on current resolved theme
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const setThemeMode = (mode) => {
    setTheme(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, toggleTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

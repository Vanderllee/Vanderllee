/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useState, useCallback } from 'react';

interface ThemeContextData {
  theme: 'light' | 'dark';
  changeTheme(): void;
}
export const ThemeProvider: React.FC = ({ children }) => {
  const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const changeTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

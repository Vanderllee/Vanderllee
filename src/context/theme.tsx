/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useState, useCallback } from 'react';

interface ThemeContextData {
  theme: 'light' | 'dark';
  changeTheme(): void;
}
/* getting context */
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const [theme, setTheme] = useState<'light' | 'dark'>('dark');

const changeTheme = useCallback(() => {
  setTheme(theme === 'dark' ? 'light' : 'dark');
}, [theme]);

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

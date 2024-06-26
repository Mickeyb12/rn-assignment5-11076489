import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const themes = {
  light: {
    background: '#fff',
    text: '#000',
    icon: '#000',
  },
  dark: {
    background: '#000435',
    text: '#fff',
    icon: '#fff',
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const theme = isDarkTheme ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

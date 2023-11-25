import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeStorage = ({ children }) => {
  //tema
  const [theme, setTheme] = useState('light');
  function handleTheme() {
    setTheme((prevStates) => (prevStates === 'dark' ? 'light' : 'dark'));
  }
  //aplicar o tema
  const appStyle = {
    color: theme === 'dark' ? '#94e9c6' : '#000',
    background: theme === 'dark' ? '#000' : '#94e9c6',
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme, appStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};

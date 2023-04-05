// 🚢
import React, { createContext, useMemo, useState } from 'react';
import useStorage from '@/hooks-not-needed/useStorage';

type colorModeType = 'light-theme' | 'dark-theme';
export const ColorThemeContext = createContext(null);

// 📦📦📦
const ColorThemeProvider = ({ children }) => {
  const initialColorTheme = document.documentElement.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';

  const [colorTheme, setColorMode] = useState(initialColorTheme);

  const { setItem } = useStorage();

  const setColorTheme = (colorMode: colorModeType) => {
    setColorMode(colorMode);
    // change color theme in css
    if (colorMode === 'light-theme') {
      // THE ORDER OF REMOVING AND ADDING CLASSES IS IMPORTANT
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
    if (colorMode === 'dark-theme') {
      // THE ORDER OF REMOVING AND ADDING CLASSES IS IMPORTANT
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    }
  };

  const toggleColorTheme = () => {
    if (colorTheme === 'light-theme') {
      setColorTheme('dark-theme');
      setItem('colorTheme', 'dark-theme', 'localStorage');
    }
    if (colorTheme === 'dark-theme') {
      setColorTheme('light-theme');
      setItem('colorTheme', 'light-theme', 'localStorage');
    }
  };
  const providerValue = useMemo(() => ({ colorTheme, setColorTheme, toggleColorTheme }), [colorTheme, setColorTheme, toggleColorTheme]);
  return <ColorThemeContext.Provider value={providerValue}>{children}</ColorThemeContext.Provider>;
};
export default ColorThemeProvider;

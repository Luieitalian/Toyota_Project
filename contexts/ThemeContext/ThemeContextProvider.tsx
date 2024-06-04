import React, {memo, useCallback, useMemo, useState} from 'react';
import {ThemeContext} from './ThemeContext';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    console.log('heloo');
    return setIsDark((prevIsDark) => !prevIsDark);
  };

  const themeContext = useMemo(
    () => ({
      isDark,
      toggleTheme,
    }),
    [isDark, toggleTheme]
  );

  if (!themeContext) {
    throw new Error('themeContext does not exist.');
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(ThemeContextProvider);

import React, {memo, useCallback, useMemo, useState} from 'react';
import {ThemeContext} from './ThemeContext';
import {themes} from '../../globals/theme';
import SystemNavigationBar from 'react-native-system-navigation-bar';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  const [isDark, setIsDark] = useState(true);

  const theme = isDark ? themes.dark : themes.light;

  // Set Navigation bar color to fit the app theme
  SystemNavigationBar.setNavigationColor(theme.colors.background);
  // Set Navigation bar button colors for visibility
  SystemNavigationBar.setBarMode(isDark ? 'light' : 'dark');

  const toggleTheme = useCallback(() => {
    return setIsDark(!isDark);
  }, []);

  const themeContext = useMemo(
    () => ({
      toggleTheme,
      isDark,
    }),
    [toggleTheme, isDark]
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

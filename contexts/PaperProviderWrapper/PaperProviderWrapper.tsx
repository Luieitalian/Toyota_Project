import React, {memo, useContext, useMemo} from 'react';
import {PaperProvider, useTheme} from 'react-native-paper';
import {themes} from '@/globals/theme';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {ThemeContext} from '@/contexts/ThemeContext/ThemeContext';

export type PaperProviderWrapperProps = {
  children: React.ReactNode;
};

const PaperProviderWrapper = ({children}: PaperProviderWrapperProps) => {
  const {isDark} = useContext(ThemeContext);

  const theme = useMemo(() => (isDark ? themes.dark : themes.light), [isDark]);

  // Set Navigation bar color to fit the app theme
  SystemNavigationBar.setNavigationColor(theme.colors.background);
  // Set Navigation bar button colors for visibility
  SystemNavigationBar.setBarMode(isDark ? 'light' : 'dark');

  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default memo(PaperProviderWrapper);

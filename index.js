import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper';
import LightTheme from './themes/LightTheme.json';
import DarkTheme from './themes/DarkTheme.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useState, useCallback, useMemo} from 'react';
import {ThemeContext} from './contexts/ThemeContext';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import './i18n';

const themes = {
  dark: {
    ...MD3DarkTheme,
    colors: DarkTheme.colors,
  },
  light: {
    ...MD3LightTheme,
    colors: LightTheme.colors,
  },
};

const AppMiddleWare = () => {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? themes.dark : themes.light;

  SystemNavigationBar.setNavigationColor(theme.colors.surfaceVariant); // Set Navigation bar color to fit the app theme

  const toggleTheme = useCallback(() => {
    return setIsDark(!isDark);
  }, [isDark]);

  const context = useMemo(
    () => ({
      toggleTheme,
      isDark,
    }),
    [toggleTheme, isDark]
  );

  return (
    <ThemeContext.Provider value={context}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppMiddleWare);

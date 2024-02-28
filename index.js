import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper';
import LightTheme from './themes/LightTheme.json';
import DarkTheme from './themes/DarkTheme.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';

const theme = {
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
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <PaperProvider theme={isDarkMode ? theme.dark : theme.light}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppMiddleWare);

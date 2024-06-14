import DarkTheme from '@/themes/DarkTheme.json';
import LightTheme from '@/themes/LightTheme.json';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

export const themes = {
  dark: {
    ...MD3DarkTheme,
    colors: DarkTheme.colors,
  },
  light: {
    ...MD3LightTheme,
    colors: LightTheme.colors,
  },
};

import {createContext} from 'react';

export const ThemeContext = createContext({
  toggleTheme: () => {},
  isDark: true,
});

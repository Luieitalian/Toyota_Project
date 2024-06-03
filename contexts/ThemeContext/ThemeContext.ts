import {createContext} from 'react';

interface ThemeContextType {
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

import {createContext} from 'react';

export const FavoritesContext = createContext({
  favorites: [] as string[],
  removeFromFavorites: () => {},
  addToFavorites: () => {},
});

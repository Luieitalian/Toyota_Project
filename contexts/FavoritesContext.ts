import {createContext} from 'react';

export const FavoritesContext = createContext({
  favorites: [] as string[],
  addToFavorites: (prod_id: string) => {},
  removeFromFavorites: (prod_id: string) => {},
});

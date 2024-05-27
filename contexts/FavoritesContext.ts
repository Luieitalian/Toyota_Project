import {createContext} from 'react';
import {ProductModel} from '../models/ProductModel';

export const FavoritesContext = createContext({
  favorites: [] as string[],
  addToFavorites: (prod_id: string) => {},
  removeFromFavorites: (prod_id: string) => {},
  isFavorite: (item: ProductModel): boolean => {
    return false;
  },
});

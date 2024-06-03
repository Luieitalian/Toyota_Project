import {createContext} from 'react';
import {ProductModel} from '../../models/ProductModel';

interface FavoritesContextType {
  favorites: string[];
  addToFavorites: (prod_id: string) => void;
  removeFromFavorites: (prod_id: string) => void;
  isFavorite: (item: ProductModel) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);

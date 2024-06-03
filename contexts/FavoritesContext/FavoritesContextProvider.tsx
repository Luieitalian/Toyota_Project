import React, {useCallback, useMemo, useState} from 'react';
import {FavoritesContext} from './FavoritesContext';
import useFavoriteProductsFunctions from '../../hooks/useFavoriteProductsFunctions';
import {ProductModel} from '../../models/ProductModel';

type FavoritesContextProviderProps = {
  children: React.ReactNode;
};

export const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const {addToFavorites, removeFromFavorites} =
    useFavoriteProductsFunctions(setFavorites);

  const isFavorite = useCallback(
    (item: ProductModel) => favorites.includes(item.id),
    [favorites]
  );

  const favoritesContext = useMemo(
    () => ({
      favorites: favorites,
      addToFavorites: addToFavorites,
      removeFromFavorites: removeFromFavorites,
      isFavorite: isFavorite,
    }),
    [favorites, isFavorite, addToFavorites, removeFromFavorites]
  );

  if (!favoritesContext) {
    throw new Error('favoritesContext does not exist.');
  }

  return (
    <FavoritesContext.Provider value={favoritesContext}>
      {children}
    </FavoritesContext.Provider>
  );
};

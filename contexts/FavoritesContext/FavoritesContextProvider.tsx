import React, {memo, useCallback, useMemo, useState} from 'react';
import {FavoritesContext} from './FavoritesContext';
import useFavoriteProductsFunctions from '@/hooks/useFavoriteProductsFunctions';
import {ProductModel} from '@/models/ProductModel';

export type FavoritesContextProviderProps = {
  children: React.ReactNode;
};

const FavoritesContextProvider = ({
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
    return <>{children}</>;
  }

  return (
    <FavoritesContext.Provider value={favoritesContext}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default memo(FavoritesContextProvider);

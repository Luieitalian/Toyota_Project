import {useCallback, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusContext} from '../contexts/StatusContext';

const useFavoriteProducts = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loadingFavorites, setLoadingFavorites] = useState<boolean>(true);

  const {isOnline} = useContext(StatusContext);

  const setFavoritesToLocalDB = useCallback(async () => {
    console.log(`Trying to set favorite products to local database!`);

    await AsyncStorage.setItem('favorites', favorites.join(','))
      .then(() => {
        console.log(`Succesfully set favorite products to local database!`);
      })
      .catch((e) => {
        console.log(`Failed to set favorite products to local database!`, e);
      });
  }, []);

  const getFavoritesFromLocalDB = useCallback(async () => {
    console.log(`Trying to get favorite products from local database!`);
    await AsyncStorage.getItem('favorites')
      .then((favs) => {
        if (favs !== null) {
          setFavorites(favs.split(','));
          setLoadingFavorites(false);
          console.log(`Succesfully got favorite products from local database!`);
        } else {
          console.log(`Failed to get favorite products from local database1!`);
        }
      })
      .catch((e) => {
        console.log(`Failed to get favorite products from local database2!`, e);
      });
  }, []);

  return {favorites, getFavoritesFromLocalDB, setFavoritesToLocalDB};
};

export default useFavoriteProducts;

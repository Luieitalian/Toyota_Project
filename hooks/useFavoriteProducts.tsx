// import {useCallback, useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const useFavoriteProducts = () => {

//   const setFavoritesToLocalDB = useCallback(async () => {
//     console.log(`Trying to set favorite products to local database!`);

//     await AsyncStorage.setItem('favorites', favorites.join(','))
//       .then(() => {
//         console.log(`Succesfully set favorite products to local database!`);
//       })
//       .catch((e) => {
//         console.log(`Failed to set favorite products to local database!`, e);
//       });
//   }, []);

//   const getFavoritesFromLocalDB = useCallback(async () => {
//     console.log(`Trying to get favorite products from local database!`);
//     await AsyncStorage.getItem('favorites')
//       .then((favs) => {
//         if (favs !== null) {
//           setFavorites(favs.split(','));
//           setLoadingFavorites(false);
//           console.log(`Succesfully got favorite products from local database!`);
//         } else {
//           console.log(`Failed to get favorite products from local database1!`);
//         }
//       })
//       .catch((e) => {
//         console.log(`Failed to get favorite products from local database2!`, e);
//       });
//   }, []);

//   return {

//   };
// };

// export default useFavoriteProducts;

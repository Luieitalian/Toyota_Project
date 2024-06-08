import AsyncStorage from '@react-native-async-storage/async-storage';

const setFavoritesToLocalDB = async (favorites: string[]) => {
  console.log(`Trying to set favorite products to local database!`);

  await AsyncStorage.setItem('favorites', favorites.join(','))
    .then(() => {
      console.log(`Succesfully set favorite products to local database!`);
    })
    .catch((e) => {
      console.log(`Failed to set favorite products to local database!`, e);
    });
};

export default setFavoritesToLocalDB;

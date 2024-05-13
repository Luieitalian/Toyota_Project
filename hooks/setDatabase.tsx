import dev_local_db from '../db/db.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setDatabase = async () => {
  await AsyncStorage.getItem('database') // if database exists in local storage then do nothing
    .catch(async () => {
      // if local storage is empty then add database
      console.log('Local database is empty!');
      console.log('Adding database to async storage from local server!');

      await AsyncStorage.setItem('database', JSON.stringify(dev_local_db));
    });
};

export default setDatabase;

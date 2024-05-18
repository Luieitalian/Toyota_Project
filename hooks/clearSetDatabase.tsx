import dev_local_db from '../db/db.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const clearSetDatabase = async () => {
  await AsyncStorage.clear();
  if ((await AsyncStorage.getItem('database')) === null) {
    // if local storage is empty then add database
    console.log('Local database is empty!');
    console.log('Adding database to async storage from local server!');

    await AsyncStorage.setItem('database', JSON.stringify(dev_local_db));
  } else {
    console.log('Local database exists! No action taken.');
  }
};

export default clearSetDatabase;

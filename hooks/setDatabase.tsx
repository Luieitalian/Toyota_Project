import {useCallback, useContext} from 'react';
import dev_local_db from '../db/db.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusContext} from '../contexts/StatusContext';

const setDatabase = async () => {
  const {isOnline} = useContext(StatusContext);

  const fn = useCallback(async () => {
    if ((await AsyncStorage.getItem('database')) === null) {
      // if local storage is empty then add database
      console.log(
        'Local database is empty! Adding database to async storage from local server!'
      );

      await AsyncStorage.setItem('database', JSON.stringify(dev_local_db));
    } else {
      console.log('Local database exists! No action taken.');
    }
  }, [isOnline]);

  return fn;
};

export default setDatabase;

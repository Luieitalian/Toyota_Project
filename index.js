import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import {ActivityIndicator} from 'react-native-paper';
import React, {useState, useCallback, useEffect} from 'react';
import setDatabase from './utils/setDatabase';
import ContextProvider from './contexts/ContextProvider';
import App from './App';
import './i18n';

const AppMiddleWare = () => {
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false);

  useEffect(
    useCallback(() => {
      const initializeDatabase = async () => {
        await setDatabase();
        setIsDatabaseInitialized(true);
      };

      initializeDatabase();
    }, [])
  );

  if (!isDatabaseInitialized) {
    return (
      <View>
        <ActivityIndicator>Loading</ActivityIndicator>
      </View>
    );
  }

  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppMiddleWare);

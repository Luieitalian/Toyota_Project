import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import ContextProvider from './contexts/ContextProvider';
import App from './App';
import './i18n';

const AppMiddleWare = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppMiddleWare);

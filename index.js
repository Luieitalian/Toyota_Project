import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ActivityIndicator} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import setDatabase from './hooks/setDatabase';
import {UnsentCartsContext} from './contexts/UnsentCartsContext/UnsentCartsContext';
import ShoppingCartContextProvider from './contexts/ShoppingCartContext/ShoppingCartContextProvider';
import FavoritesContextProvider from './contexts/FavoritesContext/FavoritesContextProvider';
import PastSalesContextProvider from './contexts/PastSalesContext/PastSalesContextProvider';
import ProductsContextProvider from './contexts/ProductsContext/ProductsContextProvider';
import StatusContextProvider from './contexts/StatusContext/StatusContextProvider';
import ThemeContextProvider from './contexts/ThemeContext/ThemeContextProvider';
import SafeAreaProviderWrapper from './contexts/SafeAreaProviderWrapper';
import './i18n';

const AppMiddleWare = () => {
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false);

  useEffect(() => {
    const initializeDatabase = async () => {
      await setDatabase();
      setIsDatabaseInitialized(true);
    };

    initializeDatabase();
  }, []);

  if (!isDatabaseInitialized) {
    return (
      <View>
        <ActivityIndicator>Loading</ActivityIndicator>
      </View>
    );
  }

  return (
    <StatusContextProvider>
      <ProductsContextProvider>
        <FavoritesContextProvider>
          <ShoppingCartContextProvider>
            <PastSalesContextProvider>
              <UnsentCartsContext.Provider value={unsentCartsContext}>
                <SafeAreaProviderWrapper>
                  <ThemeContextProvider>
                    <App />
                  </ThemeContextProvider>
                </SafeAreaProviderWrapper>
              </UnsentCartsContext.Provider>
            </PastSalesContextProvider>
          </ShoppingCartContextProvider>
        </FavoritesContextProvider>
      </ProductsContextProvider>
    </StatusContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppMiddleWare);

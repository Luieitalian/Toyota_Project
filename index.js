import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  ActivityIndicator,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import LightTheme from './themes/LightTheme.json';
import DarkTheme from './themes/DarkTheme.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from 'react';
import {ThemeContext} from './contexts/ThemeContext';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import './i18n';
import {ShoppingCartContext} from './contexts/ShoppingCartContext';
import useShoppingCartFunctions from './hooks/useShoppingCartFunctions';
import useProducts from './hooks/useProducts';
import {ProductsContext} from './contexts/ProductsContext';
import {StatusContext} from './contexts/StatusContext';
import setDatabase from './hooks/setDatabase';
import useFavoriteProductsFunctions from './hooks/useFavoriteProductsFunctions';
import {FavoritesContext} from './contexts/FavoritesContext';
import {UnsentCartsContext} from './contexts/UnsentCartsContext';
import {useTranslation} from 'react-i18next';
import {PastSalesContext} from './contexts/PastSalesContext';
import ShoppingCartContextProvider from './contexts/ShoppingCartContext/ShoppingCartContextProvider';

const themes = {
  dark: {
    ...MD3DarkTheme,
    colors: DarkTheme.colors,
  },
  light: {
    ...MD3LightTheme,
    colors: LightTheme.colors,
  },
};

const AppMiddleWare = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [unsentCartReceipts, setUnsentCartReceipts] = useState([]);
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false);
  const [pastSalesReceipts, setPastSalesReceipts] = useState([]);

  const theme = isDark ? themes.dark : themes.light;
  SystemNavigationBar.setNavigationColor(theme.colors.background); // Set Navigation bar color to fit the app theme
  SystemNavigationBar.setBarMode(isDark ? 'light' : 'dark'); // Set Navigation bar button colors for visibility

  useEffect(() => {
    const initializeDatabase = async () => {
      await setDatabase();
      setIsDatabaseInitialized(true);
    };

    initializeDatabase();
  }, [isOnline]);

  const {addToFavorites, removeFromFavorites} =
    useFavoriteProductsFunctions(setFavorites);

  const {products, loadingProducts} = useProducts({
    isOnline: isOnline,
    isDatabaseInitialized: isDatabaseInitialized,
  });

  const toggleOnlineStatus = useCallback(() => {
    return setIsOnline(!isOnline);
  }, [isOnline]);

  const toggleTheme = useCallback(() => {
    return setIsDark(!isDark);
  }, [isDark]);

  const isFavorite = useCallback(
    (item) => favorites.includes(item.id),
    [favorites]
  );

  //  ------CONTEXTS------
  const themeContext = useMemo(
    () => ({
      toggleTheme,
      isDark,
    }),
    [toggleTheme, isDark]
  );

  const statusContext = useMemo(
    () => ({isOnline: isOnline, toggleOnlineStatus: toggleOnlineStatus}),
    [isOnline, toggleOnlineStatus]
  );

  const productsContext = useMemo(
    () => ({
      products: products,
      loadingProducts: loadingProducts,
    }),
    [products, loadingProducts]
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

  const unsentCartsContext = useMemo(
    () => ({
      unsentCartReceipts: unsentCartReceipts,
      setUnsentCartReceipts: setUnsentCartReceipts,
    }),
    [unsentCartReceipts, setUnsentCartReceipts]
  );

  const pastSalesContext = useMemo(
    () => ({
      pastSalesReceipts: pastSalesReceipts,
      setPastSalesReceipts: setPastSalesReceipts,
    }),
    [pastSalesReceipts, setPastSalesReceipts]
  );

  //  ------STYLES FOR THE SAFE AREA PROVIDER------
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        safeAreaProvider: {
          backgroundColor: theme.colors.background,
        },
      }),
    [theme]
  );
  // These styles prevent flashing when navigating between screens.
  //  ------STYLES FOR THE SAFE AREA PROVIDER------

  if (!isDatabaseInitialized) {
    return (
      <View>
        <ActivityIndicator>Loading</ActivityIndicator>
      </View>
    );
  }

  return (
    <StatusContext.Provider value={statusContext}>
      <ThemeContext.Provider value={themeContext}>
        <ProductsContext.Provider value={productsContext}>
          <FavoritesContext.Provider value={favoritesContext}>
            <ShoppingCartContextProvider>
              <UnsentCartsContext.Provider value={unsentCartsContext}>
                <PastSalesContext.Provider value={pastSalesContext}>
                  <PaperProvider theme={theme}>
                    <SafeAreaProvider style={styles.safeAreaProvider}>
                      <App />
                    </SafeAreaProvider>
                  </PaperProvider>
                </PastSalesContext.Provider>
              </UnsentCartsContext.Provider>
            </ShoppingCartContextProvider>
          </FavoritesContext.Provider>
        </ProductsContext.Provider>
      </ThemeContext.Provider>
    </StatusContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppMiddleWare);

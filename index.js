import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper';
import LightTheme from './themes/LightTheme.json';
import DarkTheme from './themes/DarkTheme.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useState, useCallback, useMemo, useContext} from 'react';
import {ThemeContext} from './contexts/ThemeContext';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import './i18n';
import {LanguageContext} from './contexts/LanguageContext';
import {ShoppingCartContext} from './contexts/ShoppingCartContext';
import useShoppingCartFunctions from './hooks/useShoppingCartFunctions';
import useProducts from './hooks/useProducts';
import {ProductsContext} from './contexts/ProductsContext';
import {StatusContext} from './contexts/StatusContext';
import setDatabase from './hooks/setDatabase';
import useFavoriteProductsFunctions from './hooks/useFavoriteProductsFunctions';
import {FavoritesContext} from './contexts/FavoritesContext';

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
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isOnline, setIsOnline] = useState(false);
  const [selectedOfferID, setSelectedOfferID] = useState(undefined);
  const [favorites, setFavorites] = useState([]);

  const theme = isDark ? themes.dark : themes.light;
  SystemNavigationBar.setNavigationColor(theme.colors.background); // Set Navigation bar color to fit the app theme
  SystemNavigationBar.setBarMode(isDark ? 'light' : 'dark'); // Set Navigation bar button colors for visibility
  setDatabase();

  const {addToCart, removeFromCart, removeOne, clearCart} =
    useShoppingCartFunctions(setShoppingCart);
  const {addToFavorites, removeFromFavorites} =
    useFavoriteProductsFunctions(setFavorites);

  const {products, loadingProducts} = useProducts({isOnline: isOnline});

  const toggleOnlineStatus = useCallback(() => {
    return setIsOnline(!isOnline);
  }, [isOnline]);

  const toggleTheme = useCallback(() => {
    return setIsDark(!isDark);
  }, [isDark]);

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

  const shoppingCartContext = useMemo(
    () => ({
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      removeOne: removeOne,
      clearCart: clearCart,
      selectedOfferID: selectedOfferID,
      setSelectedOfferID: setSelectedOfferID,
      cart: shoppingCart,
    }),
    [shoppingCart, selectedOfferID]
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
    }),
    [favorites, addToFavorites, removeFromFavorites]
  );

  const languageContext = useContext(LanguageContext);

  return (
    <StatusContext.Provider value={statusContext}>
      <ThemeContext.Provider value={themeContext}>
        <LanguageContext.Provider value={languageContext}>
          <ProductsContext.Provider value={productsContext}>
            <FavoritesContext.Provider value={favoritesContext}>
              <ShoppingCartContext.Provider value={shoppingCartContext}>
                <PaperProvider theme={theme}>
                  <SafeAreaProvider>
                    <App />
                  </SafeAreaProvider>
                </PaperProvider>
              </ShoppingCartContext.Provider>
            </FavoritesContext.Provider>
          </ProductsContext.Provider>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </StatusContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppMiddleWare);

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';
import SalesScreen from './screens/SalesScreen';
import useProductsScreenStyle from './screens/styles/useProductsScreenStyle';
import useSalesScreenStyle from './screens/styles/useSalesScreenStyle';
import HomeScreen from './screens/HomeScreen';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

const App = () => {
  const productsScreenStyle = useProductsScreenStyle();
  const salesScreenStyle = useSalesScreenStyle();

  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="LoginScreen"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerTitle: t('home_screen'),
            headerShown: true,
            headerStyle: productsScreenStyle.styles.headerStyle,
            headerTitleStyle: productsScreenStyle.styles.headerTitleStyle,
            headerTintColor: productsScreenStyle.styles.headerTint.color,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="ProductsScreen"
          options={{
            headerShown: true,
            headerStyle: productsScreenStyle.styles.headerStyle,
            headerTitleStyle: productsScreenStyle.styles.headerTitleStyle,
            headerTintColor: productsScreenStyle.styles.headerTint.color,
          }}
          component={ProductsScreen}
        />
        <Stack.Screen
          name="SalesScreen"
          options={{
            headerShown: true,
            headerStyle: salesScreenStyle.styles.headerStyle,
            headerTitleStyle: salesScreenStyle.styles.headerTitleStyle,
            headerTintColor: salesScreenStyle.styles.headerTint.color,
          }}
          component={SalesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

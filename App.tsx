import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '@/screens/LoginScreen';
import ProductsScreen from '@/screens/ProductsScreen';
import SalesScreen from '@/screens/SalesScreen';
import HomeScreen from '@/screens/HomeScreen';
import {useTranslation} from 'react-i18next';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '@/screens/SettingsScreen';
import ReportsScreen from '@/screens/ReportsScreen';
import Header from '@/components/common/Header';
import useScreenHeaderStyle from '@/screens/styles/useScreenHeaderStyle';
import PastSalesScreen from '@/screens/PastSalesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const {headerStyles} = useScreenHeaderStyle();

  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: headerStyles.headerStyle,
          headerTitleStyle: headerStyles.headerTitleStyle,
          headerTintColor: headerStyles.headerTint.color,
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen
          name="LoginScreen"
          options={{
            headerTitle: t('login'),
            headerShown: true,
            headerRight: () => <Header />,
          }}
          component={LoginScreen}
        />

        <Stack.Screen
          name="HomeScreen"
          options={{
            headerTitle: t('home_screen'),
            headerShown: true,
          }}
          component={HomeScreen}
        />

        <Stack.Screen
          name="ProductsScreen"
          options={{
            headerTitle: t('products'),
            headerShown: true,
          }}
          component={ProductsScreen}
        />
        <Stack.Screen
          name="SalesScreen"
          options={{
            headerTitle: t('sales'),
            headerShown: true,
          }}
          component={SalesScreen}
        />
        <Stack.Screen
          name="SettingsScreen"
          options={{
            headerTitle: t('settings'),
            headerShown: true,
          }}
          component={SettingsScreen}
        />
        <Stack.Screen
          name="ReportsScreen"
          options={{
            headerTitle: t('reports'),
            headerShown: true,
          }}
          component={ReportsScreen}
        />
        <Stack.Screen
          name="PastSalesScreen"
          options={{
            headerTitle: t('past_sales'),
            headerShown: true,
          }}
          component={PastSalesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

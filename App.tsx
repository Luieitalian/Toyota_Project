import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';
import {useTranslation} from 'react-i18next';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const {t, i18n} = useTranslation();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login Screen"
            options={{headerShown: false}}
            component={LoginScreen}
          />
          <Stack.Screen name="Products" component={ProductsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

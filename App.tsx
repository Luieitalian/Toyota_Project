import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';
import SalesScreen from './screens/SalesScreen';
import setDatabase from './hooks/setDatabase';

const Stack = createNativeStackNavigator();

const App = () => {
  setDatabase();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen
          name="LoginScreen"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Products"
          options={{headerShown: false}}
          component={ProductsScreen}
        />
        <Stack.Screen
          name="SalesScreen"
          options={{headerShown: false}}
          component={SalesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

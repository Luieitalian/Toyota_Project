import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

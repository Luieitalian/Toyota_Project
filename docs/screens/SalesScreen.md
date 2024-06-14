# `SalesScreen` Component Documentation

## Overview

The `SalesScreen` component is a screen in the HızlıPos React Native application responsible for displaying sales-related information and options. It provides a cart section (`SalesScreenCart`) for managing selected products and options section (`SalesScreenOptions`) for configuring sales settings.

## Dependencies

- `react`
- `react-native`
- `react-native-safe-area-context`
- `./styles/useSalesScreenStyle`
- `@/components/SalesScreenCart`
- `@/components/SalesScreenOptions`
- `@/components/Footer`
- `@/contexts/FavoritesContext/FavoritesContext`
- `@react-navigation/native`

## Component Definition

```javascript
import {StatusBar, View} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useSalesScreenStyle from './styles/useSalesScreenStyle';
import SalesScreenCart from '@/components/SalesScreenCart';
import SalesScreenOptions from '@/components/SalesScreenOptions';
import Footer from '@/components/Footer';
import {FavoritesContext} from '@/contexts/FavoritesContext/FavoritesContext';
import {useFocusEffect} from '@react-navigation/native';
import setFavoritesToLocalDB from '@/utils/setFavoritesToLocalDB';

const SalesScreen = ({route, navigation}: any) => {
  const {styles, theme} = useSalesScreenStyle();

  const {favorites} = useContext(FavoritesContext);

  useFocusEffect(
    useCallback(() => {
      setFavoritesToLocalDB(favorites);
    }, [])
  );

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={styles.container}>
        <SalesScreenCart />
        <SalesScreenOptions />
      </View>
      <Footer />
    </SafeAreaView>
  );
};
export default SalesScreen;
```

## Usage

### Props

- `route`: Route object containing the route's information.
- `navigation`: Navigation object providing functions to navigate to different screens.

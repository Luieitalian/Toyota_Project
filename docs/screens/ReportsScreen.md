# `ReportsScreen` Component Documentation

## Overview

The `ReportsScreen` component is a screen in the HızlıPos React Native application responsible for displaying reports-related information and actions. It provides options to show past sales (`ShowPastSales`) and synchronize unsent carts (`SynchronizeUnsentCarts`), along with status information (`Status`) and a footer component (`Footer`).

## Dependencies

- `react`
- `react-native`
- `react-native-safe-area-context`
- `./styles/useReportsScreenStyle`
- `../components/ShowPastSales`
- `../components/SynchronizeUnsentCarts`
- `../components/Status`
- `../components/Footer`

## Component Definition

```javascript
import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Status from '../components/Status';
import Footer from '../components/Footer';
import useReportsScreenStyle from './styles/useReportsScreenStyle';
import ShowPastSales from '../components/ShowPastSales';
import SynchronizeUnsentCarts from '../components/SynchronizeUnsentCarts';

const ReportsScreen = ({route, navigation}: any) => {
  const {styles, theme} = useReportsScreenStyle();

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={styles.group}>
        <ShowPastSales />
        <SynchronizeUnsentCarts />
        <Status />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default ReportsScreen;
```

## Usage

### Props

- `route`: Route object containing the route's information.
- `navigation`: Navigation object providing functions to navigate to different screens.

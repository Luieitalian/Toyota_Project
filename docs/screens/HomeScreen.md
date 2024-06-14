# `HomeScreen` Component Documentation

## Overview

The `HomeScreen` component is a screen in the HızlıPos React Native application. It provides a user interface for navigating to different sections of the application, such as sales, reports, settings, and logout. It also displays the user's status and a footer.

## Dependencies

- `react`
- `react-native`
- `react-i18next`
- `react-native-safe-area-context`
- `./styles/useHomeScreenStyle`
- `@/components/Status`
- `@/components/GoToSalesScreen`
- `@/components/GoToSettingsScreen`
- `@/components/GoToReportsScreen`
- `@/components/Logout`
- `@/components/Footer`

## Component Definition

```js
import React from 'react';
import {View, StatusBar} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHomeScreenStyle from './styles/useHomeScreenStyle';
import Status from '@/components/Status';
import GoToSalesScreen from '@/components/GoToSalesScreen';
import GoToSettingsScreen from '@/components/GoToSettingsScreen';
import GoToReportsScreen from '@/components/GoToReportsScreen';
import Footer from '@/components/Footer';
import Logout from '@/components/Logout';

const HomeScreen = ({route, navigation}: any) => {
  const {t, i18n} = useTranslation();
  const {styles, theme} = useHomeScreenStyle();

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={styles.group}>
        <GoToSalesScreen />
        <GoToReportsScreen />
        <GoToSettingsScreen />
        <Logout />
        <Status />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default HomeScreen;
```

## Usage

### Props

- `route`: Route object containing the route's information.
- `navigation`: Navigation object providing functions to navigate to different screens.

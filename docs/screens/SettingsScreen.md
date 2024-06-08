# `SettingsScreen` Component Documentation

## Overview

The `SettingsScreen` component is a screen in the HızlıPos React Native application responsible for displaying settings-related options and actions. It provides buttons for language segmentation (`LanguageSegButtons`), theme switching (`ThemeSwitchButton`), along with status information (`Status`) and a footer component (`Footer`).

## Dependencies

- `react`
- `react-native`
- `react-native-safe-area-context`
- `./styles/useSettingsScreenStyle`
- `../components/LanguageSegButtons`
- `../components/ThemeSwitchButton`
- `../components/Status`
- `../components/Footer`

## Component Definition

```javascript
import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Status from '../components/Status';
import Footer from '../components/Footer';
import useSettingsScreenStyle from './styles/useSettingsScreenStyle';
import LanguageSegButtons from '../components/LanguageSegButtons';
import ThemeSwitchButton from '../components/ThemeSwitchButton';

const SettingsScreen = ({route, navigation}: any) => {
  const {styles, theme} = useSettingsScreenStyle();

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={styles.group}>
        <LanguageSegButtons />
        <ThemeSwitchButton />
        <Status />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default SettingsScreen;
```

## Usage

### Props

- `route`: Route object containing the route's information.
- `navigation`: Navigation object providing functions to navigate to different screens.

import React, {useRef, useState} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import Status from '../components/Status';
import Footer from '../components/Footer';
import useSettingsScreenStyle from './styles/useSettingsScreenStyle';
import LanguageSegButtons from '../components/LanguageSegButtons';
import ThemeSwitchButton from '../components/ThemeSwitchButton';

const SettingsScreen = ({route, navigation}: any) => {
  const {t, i18n} = useTranslation();
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

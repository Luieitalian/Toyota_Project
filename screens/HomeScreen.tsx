import React, {useRef, useState} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHomeScreenStyle from './styles/useHomeScreenStyle';
import Status from '../components/Status';
import GoToSalesScreen from '../components/GoToSalesScreen';
import GoToSettingsScreen from '../components/GoToSettingsScreen';
import GoToReportsScreen from '../components/GoToReportsScreen';
import LogOut from '../components/LogOut';

const HomeScreen = ({route, navigation}: any) => {
  const {t, i18n} = useTranslation();
  const {styles, theme} = useHomeScreenStyle();

  return (
    <SafeAreaView style={styles.screenView}>
      <GoToSalesScreen />
      <GoToReportsScreen />
      <GoToSettingsScreen />
      <LogOut />
      <Status />
    </SafeAreaView>
  );
};

export default HomeScreen;

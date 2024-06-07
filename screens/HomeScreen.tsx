import React, {useRef, useState} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHomeScreenStyle from './styles/useHomeScreenStyle';
import Status from '../components/Status';
import GoToSalesScreen from '../components/GoToSalesScreen';
import GoToSettingsScreen from '../components/GoToSettingsScreen';
import GoToReportsScreen from '../components/GoToReportsScreen';
import Footer from '../components/Footer';
import Logout from '../components/Logout';

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

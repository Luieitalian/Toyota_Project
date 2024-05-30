import React, {useRef, useState} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import Status from '../components/Status';
import Footer from '../components/Footer';
import useReportsScreenStyle from './styles/useReportsScreenStyle';
import ShowPastSales from '../components/ShowPastSales';
import SynchronizeUnsentCarts from '../components/SynchronizeUnsentCarts';

const ReportsScreen = ({route, navigation}: any) => {
  const {t, i18n} = useTranslation();
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

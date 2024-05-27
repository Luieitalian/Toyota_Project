import React, {useRef, useState} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHomeScreenStyle from './styles/useHomeScreenStyle';

const HomeScreen = ({route, navigation}: any) => {
  const {t, i18n} = useTranslation();
  const {styles, theme} = useHomeScreenStyle();

  return <SafeAreaView style={styles.screenView}></SafeAreaView>;
};

export default HomeScreen;

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

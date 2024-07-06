import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Status from '@/components/common/Status';
import Footer from '@/components/common/Footer';
import useSettingsScreenStyle from './styles/useSettingsScreenStyle';
import LanguageSegButtons from '@/components/settingsScreen/LanguageSegButtons';
import ThemeSwitchButton from '@/components/settingsScreen/ThemeSwitchButton';
import PrinterTest from '@/components/settingsScreen/PrinterTest';
import SynchronizationSwitchButton from '@/components/settingsScreen/SynchronizationSwitchButton';

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
        <SynchronizationSwitchButton />
        <PrinterTest />
        <Status />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default SettingsScreen;

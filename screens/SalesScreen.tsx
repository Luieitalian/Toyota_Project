import {Button, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useSalesScreenStyle from './styles/useSalesScreenStyle';
import {useTranslation} from 'react-i18next';
import SalesScreenCart from '../components/SalesScreenCart';
import SalesScreenOptions from '../components/SalesScreenOptions';

const SalesScreen = ({route, navigation}: any) => {
  const {styles, theme} = useSalesScreenStyle();
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.screenView}>
      <View style={styles.container}>
        {/* <Header t={t} theme={theme} /> */}
        <SalesScreenCart t={t} theme={theme} />
        <SalesScreenOptions t={t} theme={theme} />
      </View>
    </SafeAreaView>
  );
};
export default SalesScreen;

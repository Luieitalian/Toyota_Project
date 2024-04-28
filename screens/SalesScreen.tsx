import {Text, View} from 'react-native';
import React, {useState} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import useSalesScreenStyle from './styles/useSalesScreenStyle';
import {useTranslation} from 'react-i18next';

const SalesScreen = ({route, navigation}: any) => {
  const {styles, theme} = useSalesScreenStyle();
  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView style={styles.screenView}>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};
export default SalesScreen;

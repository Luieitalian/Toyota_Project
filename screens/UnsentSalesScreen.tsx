import React, {useContext} from 'react';
import {View, StatusBar, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import Footer from '@/components/common/Footer';
import {PastSalesContext} from '@/contexts/PastSalesContext/PastSalesContext';
import useUnsentSalesScreenStyle from './styles/useUnsentSalesScreenStyle';
import UnsentSalesDataTable from '@/components/unsentSalesScreen/UnsentSalesDataTable';
import {UnsentSalesContext} from '@/contexts/UnsentSalesContext/UnsentSalesContext';

const UnsentSalesScreen = ({route, navigation}: any) => {
  const {t} = useTranslation();
  const {styles, theme} = useUnsentSalesScreenStyle();

  const {unsentSales} = useContext(UnsentSalesContext);

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={styles.contentContainer}>
        <UnsentSalesDataTable unsentSales={unsentSales} />
      </View>

      <Footer />
    </SafeAreaView>
  );
};

export default UnsentSalesScreen;

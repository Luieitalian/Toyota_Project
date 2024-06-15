import React, {useMemo} from 'react';
import {ScrollView, StatusBar, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Footer from '@/components/common/Footer';
import usePaymentScreenStyle from './styles/usePaymentScreenStyle';
import {breakPoint} from '@/globals/style';
import SelectedProductsList from '@/components/paymentScreen/SelectedProductsList';
import PaymentInteractions from '@/components/paymentScreen/PaymentInteractions';
import PaymentOptions from '@/components/paymentScreen/PaymentOptions';

const PaymentScreen = ({route, navigation}: any) => {
  const {styles, theme} = usePaymentScreenStyle();
  const {width} = useWindowDimensions();

  const isWide = useMemo(() => width >= breakPoint, [width]);

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      {isWide ? (
        <ScrollView contentContainerStyle={styles.containerRow}>
          <PaymentInteractions />
          <SelectedProductsList />
          <PaymentOptions />
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.containerCol}>
          <SelectedProductsList />
          <PaymentInteractions />
          <PaymentOptions />
        </ScrollView>
      )}
      <Footer />
    </SafeAreaView>
  );
};
export default PaymentScreen;

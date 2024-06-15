import React, {useMemo} from 'react';
import {ScrollView, StatusBar, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Footer from '@/components/common/Footer';
import usePaymentScreenStyle from './styles/usePaymentScreenStyle';
import {breakPoint} from '@/globals/style';
import PaymentInteractions from '@/components/paymentScreen/PaymentInteractions';
import PaymentOptions from '@/components/paymentScreen/PaymentOptions';
import PaymentProducts from '@/components/paymentScreen/PaymentProducts';

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
        <View style={[styles.container, styles.containerRow]}>
          <PaymentInteractions />
          <PaymentProducts />
          <PaymentOptions />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={[
            styles.container,
            styles.containerScrollView,
            styles.containerCol,
          ]}
        >
          <PaymentProducts />
          <PaymentInteractions />
          <PaymentOptions />
        </ScrollView>
      )}
      <Footer />
    </SafeAreaView>
  );
};
export default PaymentScreen;

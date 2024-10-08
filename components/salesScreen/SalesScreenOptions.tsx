import React, {memo} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import useSalesScreenOptionsStyle from './styles/useSalesScreenOptionsStyle';
import PickItems from './PickItems';
import ScanBarcode from './ScanBarcode';
import AddProductWithID from './AddProductWithID';
import LookUpPrice from './LookUpPrice';
import CreditCardSelect from '../paymentScreen/CreditCardSelect';
import CashSelect from '../paymentScreen/CashSelect';
import ReceiptMail from '../paymentScreen/ReceiptMail';
import PickOffer from '../paymentScreen/PickOffer';
import Pay from '../paymentScreen/Pay';
import ClearCart from './ClearCart';
import {breakPoint} from '@/globals/style';
import {useTranslation} from 'react-i18next';
import GoToPaymentScreen from './GoToPaymentScreen';

const SalesScreenOptions = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {width} = useWindowDimensions();
  const isWide = width >= breakPoint;

  const {styles} = useSalesScreenOptionsStyle(theme, isWide);

  return isWide ? (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <AddProductWithID />
      </View>
      <View style={styles.flexRow}>
        <ScanBarcode />
        <PickItems />
      </View>
      <View style={styles.flexRow}>
        <LookUpPrice />
        <ClearCart />
      </View>
      <GoToPaymentScreen />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={[styles.flexRow, styles.flex2]}>
        <View style={[styles.flexCol, styles.flex2]}>
          <View style={[styles.flexRow, styles.flex2]}>
            <AddProductWithID />
          </View>
          <ScanBarcode />
          <View style={styles.flexRow}>
            <LookUpPrice />
            <ClearCart />
          </View>
        </View>
        <PickItems />
      </View>
      <GoToPaymentScreen />
    </View>
  );
};

export default memo(SalesScreenOptions);

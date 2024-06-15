import React, {memo, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, useWindowDimensions, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import usePaymentOptionsStyle from './styles/usePaymentOptionsStyle';
import {breakPoint} from '@/globals/style';
import PickOffer from './PickOffer';
import ReceiptMail from './ReceiptMail';
import Pay from './Pay';

const PaymentOptions = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {width} = useWindowDimensions();
  const isWide = useMemo(() => width >= breakPoint, [width]);

  const {styles} = usePaymentOptionsStyle(theme);

  return isWide ? (
    <View style={[styles.container, styles.containerWide]}>
      <View style={styles.flexColWide}>
        <PickOffer />
        <ReceiptMail />
      </View>
      <Pay />
    </View>
  ) : (
    <View style={[styles.container, styles.containerThin]}>
      <View style={styles.flexRowThin}>
        <PickOffer />
        <ReceiptMail />
      </View>
      <Pay />
    </View>
  );
};

export default memo(PaymentOptions);

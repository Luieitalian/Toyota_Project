import React, {memo} from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {TFunction} from 'i18next';
import {MD3Theme} from 'react-native-paper';
import useSalesScreenOptionsStyle from './styles/useSalesScreenOptionsStyle';
import PickItems from './PickItems';
import ScanBarcode from './ScanBarcode';
import ItemIDInput from './ItemIDInput';
import AddProductWithID from './AddProductWithID';
import LookUpPrice from './LookUpPrice';
import CreditCardSelect from './CreditCardSelect';
import CashSelect from './CashSelect';
import ReceiptMail from './ReceiptMail';
import PickOffer from './PickOffer';
import Pay from './Pay';

type SalesScreenOptionsProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const SalesScreenOptions = ({t, theme}: SalesScreenOptionsProps) => {
  const {width} = useWindowDimensions();
  const isWide = width >= 900;
  const {styles} = useSalesScreenOptionsStyle(theme, isWide);

  return isWide ? (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <ItemIDInput t={t} theme={theme} />
        <AddProductWithID t={t} theme={theme} />
      </View>
      <View style={styles.flexRow}>
        <ScanBarcode t={t} theme={theme} />
        <PickItems t={t} theme={theme} />
      </View>
      <LookUpPrice t={t} theme={theme} />
      <View style={styles.flexRow}>
        <CreditCardSelect t={t} theme={theme} />
        <CashSelect t={t} theme={theme} />
      </View>
      <View style={styles.flexRow}>
        <View style={styles.flexCol}>
          <ReceiptMail t={t} theme={theme} />
          <PickOffer t={t} theme={theme} />
        </View>
        <Pay t={t} theme={theme} />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={[styles.flexRow, styles.flex2]}>
        <View style={[styles.flexCol, styles.flex2]}>
          <View style={[styles.flexRow, styles.flex3]}>
            <ItemIDInput t={t} theme={theme} />
            <AddProductWithID t={t} theme={theme} />
          </View>
          <ScanBarcode t={t} theme={theme} />
          <LookUpPrice t={t} theme={theme} />
        </View>
        <PickItems t={t} theme={theme} />
      </View>

      <View style={styles.flexRow}>
        <View style={[styles.flexCol, styles.flex2]}>
          <View style={styles.flexRow}>
            <CreditCardSelect t={t} theme={theme} />
            <CashSelect t={t} theme={theme} />
          </View>
          <View style={styles.flexRow}>
            <ReceiptMail t={t} theme={theme} />
            <PickOffer t={t} theme={theme} />
          </View>
        </View>

        <Pay t={t} theme={theme} />
      </View>
    </View>
  );
};

export default memo(SalesScreenOptions);

import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useScanBarcodeStyle from './styles/useScanBarcodeStyle';
import CustomButton from './CustomButton';

type ScanBarcodeProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const ScanBarcode = ({t, theme}: ScanBarcodeProps) => {
  const {styles} = useScanBarcodeStyle(theme);

  const onPress = () => {
    console.log('scan barcode');
  };

  return (
    <CustomButton onPress={onPress} styles={styles} theme={theme}>
      {t('scan_barcode')}
    </CustomButton>
  );
};

export default memo(ScanBarcode);

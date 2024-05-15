import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useScanBarcodeStyle from './styles/useScanBarcodeStyle';

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
    <Pressable
      android_ripple={{
        color: theme.colors.onSecondary,
        foreground: true,
      }}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{t('scan_barcode')}</Text>
    </Pressable>
  );
};

export default memo(ScanBarcode);

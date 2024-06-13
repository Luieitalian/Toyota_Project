import React, {memo} from 'react';
import {useTheme} from 'react-native-paper';
import useScanBarcodeStyle from './styles/useScanBarcodeStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import useNFC from '../hooks/useNFC';

const ScanBarcode = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useScanBarcodeStyle(theme);
  const readNFC = useNFC();

  const onPress = async () => {
    await readNFC();
    console.log('Scan barcode');
  };

  return (
    <CustomButton onPress={onPress} overridingButtonStyles={styles}>
      {t('scan_barcode')}
    </CustomButton>
  );
};

export default memo(ScanBarcode);

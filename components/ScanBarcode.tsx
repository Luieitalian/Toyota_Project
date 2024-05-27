import React, {memo} from 'react';
import {useTheme} from 'react-native-paper';
import useScanBarcodeStyle from './styles/useScanBarcodeStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';

const ScanBarcode = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useScanBarcodeStyle(theme);

  const onPress = () => {
    console.log('scan barcode');
  };

  return (
    <CustomButton onPress={onPress} styles={styles}>
      {t('scan_barcode')}
    </CustomButton>
  );
};

export default memo(ScanBarcode);

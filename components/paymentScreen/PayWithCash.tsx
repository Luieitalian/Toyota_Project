import React, {memo} from 'react';
import CustomButton from '@/components/common/CustomButton';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import usePayWithCashStyle from './styles/usePayWithCashStyle';

const PayWithCash = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePayWithCashStyle(theme);

  const onPress = () => {
    console.log('pay_with_cash');
  };

  return (
    <CustomButton overridingButtonStyles={styles} onPress={onPress}>
      {t('pay_with_cash')}
    </CustomButton>
  );
};

export default memo(PayWithCash);

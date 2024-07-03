import React, {memo} from 'react';
import CustomButton from '@/components/common/CustomButton';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import usePayWithCashStyle from './styles/usePayWithCashStyle';

export type PayWithCashProps = {
  onSubmitAmount: (isCash: boolean) => void;
};

const PayWithCash = ({onSubmitAmount}: PayWithCashProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePayWithCashStyle(theme);

  const onPress = () => {
    console.log('pay_with_cash');
    onSubmitAmount(true);
  };

  return (
    <CustomButton overridingButtonStyles={styles} onPress={onPress}>
      {t('pay_with_cash')}
    </CustomButton>
  );
};

export default memo(PayWithCash);

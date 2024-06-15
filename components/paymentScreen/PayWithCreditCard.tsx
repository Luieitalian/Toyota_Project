import React, {memo} from 'react';
import CustomButton from '@/components/common/CustomButton';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import usePayWithCreditCardStyle from './styles/usePayWithCreditCardStyle';

const PayWithCreditCard = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePayWithCreditCardStyle(theme);

  const onPress = () => {
    console.log('pay_with_credit_card');
  };

  return (
    <CustomButton overridingButtonStyles={styles} onPress={onPress}>
      {t('pay_with_credit_card')}
    </CustomButton>
  );
};

export default memo(PayWithCreditCard);

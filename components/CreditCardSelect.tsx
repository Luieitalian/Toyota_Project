import React, {memo} from 'react';
import {useTheme} from 'react-native-paper';
import useCreditCardSelectStyle from './styles/useCreditCardSelectStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';

const CreditCardSelect = () => {
  const theme = useTheme();
  const {styles} = useCreditCardSelectStyle(theme);
  const {t} = useTranslation();

  const onPress = () => {
    console.log('Credt Card Select');
  };

  return (
    <CustomButton styles={styles} onPress={onPress}>
      {t('credit_card_select')}
    </CustomButton>
  );
};

export default memo(CreditCardSelect);

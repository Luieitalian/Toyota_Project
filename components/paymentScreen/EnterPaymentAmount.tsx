import React, {memo, useContext, useEffect, useState} from 'react';
import {TextInput, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {SpecialOffersContext} from '@/contexts/SpecialOffersContext/SpecialOffersContext';
import useCartPricing from '@/hooks/useCartPricing';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import useEnterPaymentAmountStyle from './styles/useEnterPaymentAmountStyle';

type EnterPaymentAmountProps = {};

const EnterPaymentAmount = ({}: EnterPaymentAmountProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useEnterPaymentAmountStyle(theme);

  const [amount, setAmount] = useState<string>();

  const onChangeAmount = () => {};
  const onSubmitAmount = () => {};

  return (
    <TextInput
      label={t('enter_payment_amount')}
      mode="outlined"
      autoCorrect={false}
      inputMode="numeric"
      value={amount}
      onChangeText={onChangeAmount}
      onSubmitEditing={onSubmitAmount}
      style={styles.textInput}
      outlineStyle={styles.textInputOutline}
      activeOutlineColor={styles.textInputActiveOutline.color}
      textColor={styles.textInputText.color}
    />
  );
};

export default memo(EnterPaymentAmount);

import React, {memo} from 'react';
import {TextInput, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useEnterPaymentAmountStyle from './styles/useEnterPaymentAmountStyle';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import {createNumberMask, useMaskedInputProps} from 'react-native-mask-input';
import currency from 'currency.js';

export type EnterPaymentAmountProps = {
  paymentAmountMasked: string | undefined;
  onChangeAmountMasked: (text: string) => void;
  onChangeAmountUnMasked: (amount: number) => void;
};

const EnterPaymentAmount = ({
  paymentAmountMasked,
  onChangeAmountUnMasked,
  onChangeAmountMasked,
}: EnterPaymentAmountProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useEnterPaymentAmountStyle(theme);

  const onSubmitEditing = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    e.preventDefault();
  };

  const amountMask = createNumberMask({
    prefix: ['₺', ' '],
    delimiter: ',',
    separator: '.',
    precision: 2,
  });

  const maskedInputProps = useMaskedInputProps({
    value: paymentAmountMasked,
    onChangeText: (masked: string) => {
      onChangeAmountMasked(masked);
      // slice off lira sign and one space then turn into appropriate value like '130.50'
      onChangeAmountUnMasked(currency(masked.slice(2)).value);
    },
    mask: amountMask,
  });

  return (
    <TextInput
      label={t('enter_payment_amount')}
      mode="outlined"
      autoCorrect={false}
      inputMode="numeric"
      onSubmitEditing={onSubmitEditing}
      style={styles.textInput}
      outlineStyle={styles.textInputOutline}
      activeOutlineColor={styles.textInputActiveOutline.color}
      textColor={styles.textInputText.color}
      {...maskedInputProps}
    />
  );
};

export default memo(EnterPaymentAmount);

import React, {memo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, TextInput} from 'react-native-paper';
import useCreditCardNumberInputStyle from './styles/useCreditCardNumberInputStyle';
import {Masks, useMaskedInputProps} from 'react-native-mask-input';

export type CreditCardNumberInputProps = {
  focusOnNameInput: () => void;
  onChangeNumber: (masked: string, unmasked: string) => void;
  creditCardNumber: string | undefined;
};

const CreditCardNumberInput = ({
  creditCardNumber,
  onChangeNumber,
  focusOnNameInput,
}: CreditCardNumberInputProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useCreditCardNumberInputStyle(theme);

  const onSubmitCardNumber = () => {
    focusOnNameInput();
  };

  const maskedInputProps = useMaskedInputProps({
    value: creditCardNumber,
    onChangeText: onChangeNumber,
    mask: Masks.CREDIT_CARD,
  });

  return (
    <TextInput
      label={t('credit_card_number')}
      mode="outlined"
      autoCorrect={false}
      onSubmitEditing={onSubmitCardNumber}
      inputMode="numeric"
      style={styles.cardNumberTextInput}
      outlineStyle={styles.cardNumberTextInputOutline}
      activeOutlineColor={styles.cardNumberTextInputActiveOutline.color}
      textColor={styles.cardNumberTextInputText.color}
      {...maskedInputProps}
    />
  );
};

export default memo(CreditCardNumberInput);

import React, {memo, RefObject, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, TextInput} from 'react-native-paper';
import {useMaskedInputProps} from 'react-native-mask-input';
import useCreditCardCVVInputStyle from './styles/useCreditCardCVVInputStyle';

type CreditCardCVVInputProps = {
  creditCardCVVInputRef: RefObject<any>;
};

const CreditCardCVVInput = ({
  creditCardCVVInputRef,
}: CreditCardCVVInputProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [creditCardCVV, setCreditCardCVV] = useState<string>();

  const {styles} = useCreditCardCVVInputStyle(theme);

  const onChangeCVV = (masked: string, unmasked: string) => {
    setCreditCardCVV(masked);
  };

  const onSubmitCardCVV = () => {};

  const CVVMask = [/\d/, /\d/, /\d/];
  const maskedInputProps = useMaskedInputProps({
    value: creditCardCVV,
    onChangeText: onChangeCVV,
    mask: CVVMask,
  });

  return (
    <TextInput
      ref={creditCardCVVInputRef}
      label={t('credit_card_CVV')}
      mode="outlined"
      autoCorrect={false}
      onSubmitEditing={onSubmitCardCVV}
      inputMode="numeric"
      style={styles.cardCVVTextInput}
      outlineStyle={styles.cardCVVTextInputOutline}
      activeOutlineColor={styles.cardCVVTextInputActiveOutline.color}
      textColor={styles.cardCVVTextInputText.color}
      {...maskedInputProps}
    />
  );
};

export default memo(CreditCardCVVInput);

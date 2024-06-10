import React, {memo, RefObject, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, TextInput} from 'react-native-paper';
import useCreditCardDateInputStyle from './styles/useCreditCardDateInputStyle';
import {useMaskedInputProps} from 'react-native-mask-input';

type CreditCardDateInputProps = {
  creditCardDateInputRef: RefObject<any>;
  focusOnCVVInput: () => void;
};

const CreditCardDateInput = ({
  creditCardDateInputRef,
  focusOnCVVInput,
}: CreditCardDateInputProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [creditCardDate, setCreditCardDate] = useState<string>();

  const {styles} = useCreditCardDateInputStyle(theme);

  const onChangeDate = (masked: string, unmasked: string) => {
    setCreditCardDate(masked);
  };

  const onSubmitCardDate = () => {
    focusOnCVVInput();
  };

  const dateMask = [/\d/, /\d/, '/', /\d/, /\d/];
  const maskedInputProps = useMaskedInputProps({
    value: creditCardDate,
    onChangeText: onChangeDate,
    mask: dateMask,
  });

  return (
    <TextInput
      ref={creditCardDateInputRef}
      label={t('credit_card_date')}
      mode="outlined"
      autoCorrect={false}
      onSubmitEditing={onSubmitCardDate}
      inputMode="numeric"
      style={styles.cardDateTextInput}
      outlineStyle={styles.cardDateTextInputOutline}
      activeOutlineColor={styles.cardDateTextInputActiveOutline.color}
      textColor={styles.cardDateTextInputText.color}
      {...maskedInputProps}
    />
  );
};

export default memo(CreditCardDateInput);

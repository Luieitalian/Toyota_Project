import React, {memo, RefObject, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, TextInput} from 'react-native-paper';
import useCreditCardNameInputStyle from './styles/useCreditCardNameInputStyle';

type CreditCardNameInputProps = {
  creditCardNameInputRef: RefObject<any>;
  focusOnDateInput: () => void;
};

const CreditCardNameInput = ({
  creditCardNameInputRef,
  focusOnDateInput,
}: CreditCardNameInputProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [creditCardName, setCreditCardName] = useState<string>();

  const {styles} = useCreditCardNameInputStyle(theme);

  const onChangeName = (text: string) => {
    setCreditCardName(text);
  };

  const onSubmitCardName = () => {
    focusOnDateInput();
  };

  return (
    <TextInput
      ref={creditCardNameInputRef}
      label={t('credit_card_name')}
      mode="outlined"
      autoCorrect={false}
      onSubmitEditing={onSubmitCardName}
      inputMode="text"
      value={creditCardName}
      onChangeText={onChangeName}
      style={styles.cardNameTextInput}
      outlineStyle={styles.cardNameTextInputOutline}
      activeOutlineColor={styles.cardNameTextInputActiveOutline.color}
      textColor={styles.cardNameTextInputText.color}
    />
  );
};

export default memo(CreditCardNameInput);

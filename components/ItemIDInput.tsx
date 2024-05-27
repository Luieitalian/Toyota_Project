import React, {Dispatch, memo, SetStateAction, useState} from 'react';
import {TextInput, useTheme} from 'react-native-paper';
import useItemIDInputStyle from './styles/useItemIDInputStyle';
import {useTranslation} from 'react-i18next';

type ItemIDInputProps = {
  setIDText: Dispatch<SetStateAction<string>>;
  onSubmitEditing: any;
  text: string;
  disabled?: boolean;
};

const ItemIDInput = ({
  text,
  setIDText,
  disabled,
  onSubmitEditing,
}: ItemIDInputProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useItemIDInputStyle(theme);
  const [opacity, setOpacity] = useState(0.5);

  const onChangeText = (input: string) => {
    setIDText(input);
  };

  const onFocus = () => {
    setOpacity(1);
  };
  const onBlur = () => {
    setOpacity(0.5);
  };

  return (
    <TextInput
      onFocus={onFocus}
      onBlur={onBlur}
      editable={!disabled}
      cursorColor={styles.textInput.color}
      underlineColor={styles.outline.color}
      activeUnderlineColor={styles.outline.color}
      placeholder={t('press_enter_id')}
      style={[styles.textInput, {opacity: opacity}]}
      value={text}
      onSubmitEditing={onSubmitEditing}
      onChangeText={onChangeText}
      autoCapitalize="none"
      placeholderTextColor={styles.textInputPlaceholder.color}
      autoCorrect={false}
      inputMode="numeric"
      mode="flat"
    />
  );
};

export default memo(ItemIDInput);

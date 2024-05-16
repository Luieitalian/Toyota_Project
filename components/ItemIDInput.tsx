import {TFunction} from 'i18next';
import React, {
  Dispatch,
  memo,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {Pressable, Text, View, TextInput} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useItemIDInputStyle from './styles/useItemIDInputStyle';

type ItemIDInputProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  setIDText: Dispatch<SetStateAction<string>>;
  onSubmitEditing: any;
  text: string;
  disabled?: boolean;
};

const ItemIDInput = ({
  t,
  theme,
  text,
  setIDText,
  disabled,
  onSubmitEditing,
}: ItemIDInputProps) => {
  const {styles} = useItemIDInputStyle(theme);

  const onChangeText = (input: string) => {
    setIDText(input);
  };

  return (
    <TextInput
      editable={!disabled}
      cursorColor={styles.textInput.color}
      placeholder={t('press_enter_id')}
      style={styles.textInput}
      value={text}
      onSubmitEditing={onSubmitEditing}
      onChangeText={onChangeText}
      autoCapitalize="none"
      placeholderTextColor={styles.textInputPlaceholder.color}
      autoCorrect={false}
      inputMode="numeric"
    />
  );
};

export default memo(ItemIDInput);

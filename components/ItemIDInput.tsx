import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View, TextInput} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useItemIDInputStyle from './styles/useItemIDInputStyle';

type ItemIDInputProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const ItemIDInput = ({t, theme}: ItemIDInputProps) => {
  const {styles} = useItemIDInputStyle(theme);
  const [idText, setIdText] = useState('');

  const onChangeText = (text: string) => {
    setIdText(text);
  };

  return (
    <TextInput
      placeholder={t('press_enter_id')}
      style={styles.textInput}
      value={idText}
      onChangeText={onChangeText}
      autoCapitalize="none"
      placeholderTextColor={styles.textInputPlaceholder.color}
      autoCorrect={false}
      inputMode="numeric"
    ></TextInput>
  );
};

export default memo(ItemIDInput);

import React, {memo, RefObject} from 'react';
import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native';
import {useTheme} from 'react-native-paper';
import usePasswordInputStyle from './styles/usePasswordInputStyle';

type PasswordInputProps = {
  pwdRef: RefObject<TextInput>;
  onChangePassword: (username: string) => void;
  password: string;
};

const PasswordInput = ({
  pwdRef,
  onChangePassword,
  password,
}: PasswordInputProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePasswordInputStyle(theme);

  return (
    <TextInput // password
      ref={pwdRef}
      secureTextEntry={true}
      placeholderTextColor={styles.placeholderText.color}
      autoCorrect={false}
      inputMode="text"
      value={password}
      onChangeText={onChangePassword}
      style={styles.textInput}
      placeholder={t('password')}
    />
  );
};

export default memo(PasswordInput);

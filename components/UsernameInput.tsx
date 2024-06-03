import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import useUsernameInputStyle from './styles/useUsernameInputStyle';

type UsernameInputProps = {
  focusOnPwd: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  onChangeUsername: (username: string) => void;
  username: string;
};

const UsernameInput = ({
  focusOnPwd,
  onChangeUsername,
  username,
}: UsernameInputProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useUsernameInputStyle(theme);

  return (
    <TextInput // username
      autoCapitalize="none"
      onSubmitEditing={focusOnPwd}
      placeholderTextColor={styles.placeholderText.color}
      autoCorrect={false}
      inputMode="text"
      value={username}
      onChangeText={onChangeUsername}
      style={styles.textInput}
      placeholder={t('username')}
    />
  );
};

export default memo(UsernameInput);

import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import {useTheme, TextInput} from 'react-native-paper';
import useUsernameInputStyle from './styles/useUsernameInputStyle';

export type UsernameInputProps = {
  focusOnPassword: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  onChangeUsername: (username: string) => void;
  username: string;
};

const UsernameInput = ({
  focusOnPassword,
  onChangeUsername,
  username,
}: UsernameInputProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useUsernameInputStyle(theme);

  return (
    <TextInput // username
      label={t('username')}
      mode="outlined"
      autoCapitalize="none"
      onSubmitEditing={focusOnPassword}
      autoCorrect={false}
      inputMode="text"
      value={username}
      onChangeText={onChangeUsername}
      style={styles.textInput}
      outlineStyle={styles.textInputOutline}
      activeOutlineColor={styles.textInputActiveOutline.color}
      textColor={styles.textInputText.color}
    />
  );
};

export default memo(UsernameInput);

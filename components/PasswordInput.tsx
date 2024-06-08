import React, {memo, RefObject, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, TextInput} from 'react-native-paper';
import usePasswordInputStyle from './styles/usePasswordInputStyle';

type PasswordInputProps = {
  passwordRef: RefObject<any>;
  onChangePassword: (username: string) => void;
  password: string;
  onSubmitPassword: () => void;
};

const PasswordInput = ({
  passwordRef,
  onChangePassword,
  password,
  onSubmitPassword,
}: PasswordInputProps) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {styles} = usePasswordInputStyle(theme);

  const onIconPress = () => {
    setIsPasswordVisible((v) => !v);
  };

  const TextInputIcon = useMemo(
    () => (
      <TextInput.Icon
        style={{marginTop: 15}}
        icon={isPasswordVisible ? 'eye' : 'eye-off'}
        onPress={onIconPress}
      />
    ),
    [isPasswordVisible]
  );

  return (
    <TextInput // password
      ref={passwordRef}
      label={t('password')}
      mode="outlined"
      secureTextEntry={!isPasswordVisible}
      autoCorrect={false}
      inputMode="text"
      value={password}
      onChangeText={onChangePassword}
      onSubmitEditing={onSubmitPassword}
      style={styles.textInput}
      outlineStyle={styles.textInputOutline}
      activeOutlineColor={styles.textInputActiveOutline.color}
      textColor={styles.textInputText.color}
      right={TextInputIcon}
    />
  );
};

export default memo(PasswordInput);

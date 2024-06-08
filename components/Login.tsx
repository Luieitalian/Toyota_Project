import React, {memo} from 'react';
import {Button, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useLoginStyle from './styles/useLoginStyle';
import {Text} from 'react-native';

type LoginProps = {
  onSubmit: () => void;
};

const Login = ({onSubmit}: LoginProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useLoginStyle(theme);

  const onButtonPress = () => {
    console.log(t('login'));
    onSubmit();
  };

  return (
    <Button
      onPress={onButtonPress}
      style={styles.button}
      labelStyle={styles.buttonLabel}
      theme={theme}
      mode="contained"
    >
      <Text>{t('login')} </Text>
    </Button>
  );
};

export default memo(Login);

import React, {memo} from 'react';
import {Button, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useLoginStyle from './styles/useLoginStyle';
import {Text} from 'react-native';
import CustomButton from '../common/CustomButton';

export type LoginProps = {
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
    <CustomButton onPress={onButtonPress} overridingButtonStyles={styles}>
      <Text>{t('login')} </Text>
    </CustomButton>
  );
};

export default memo(Login);

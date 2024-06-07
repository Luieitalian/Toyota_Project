import React, {Dispatch, memo, SetStateAction, useState} from 'react';
import {Button, TextInput, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useLoginStyle from './styles/useLoginStyle';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type LoginProps = {};

const Login = ({}: LoginProps) => {
  const theme = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const {styles} = useLoginStyle(theme);

  const onButtonPress = () => {
    console.log(t('login'));
    navigation.replace('HomeScreen');
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

import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import useLogoutStyle from './styles/useLogoutStyle';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Logout = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useLogoutStyle(theme);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    console.log('log out');
    navigation.replace('LoginScreen');
  };

  return (
    <CustomButton styles={styles} onPress={onPress}>
      {t('log_out')}
    </CustomButton>
  );
};

export default memo(Logout);

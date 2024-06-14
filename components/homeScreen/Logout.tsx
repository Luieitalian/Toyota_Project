import React, {memo} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from '../common/CustomButton';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useLogoutStyle from './styles/useLogOutStyle';

const Logout = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useLogoutStyle(theme);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    navigation.replace('LoginScreen');
  };

  return (
    <CustomButton overridingButtonStyles={styles} onPress={onPress}>
      {t('logout')}
    </CustomButton>
  );
};

export default memo(Logout);

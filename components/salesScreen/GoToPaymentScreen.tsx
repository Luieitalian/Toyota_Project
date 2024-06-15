import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from '../common/CustomButton';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useGoToPaymentScreenStyle from './styles/useGoToPaymentScreenStyle';

const GoToPaymentScreen = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useGoToPaymentScreenStyle(theme);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    console.log('Go to payment screen');
    navigation.navigate('PaymentScreen');
  };

  return (
    <CustomButton overridingButtonStyles={styles} onPress={onPress}>
      {t('go_to_payment_screen')}
    </CustomButton>
  );
};

export default memo(GoToPaymentScreen);

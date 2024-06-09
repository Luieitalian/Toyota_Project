import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import useGoToSalesScreenStyle from './styles/useGoToSalesScreenStyle';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const GoToSalesScreen = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useGoToSalesScreenStyle(theme);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    console.log('Go to sales screen');
    navigation.navigate('SalesScreen');
  };

  return (
    <CustomButton styles={styles} onPress={onPress}>
      {t('go_to_sales_screen')}
    </CustomButton>
  );
};

export default memo(GoToSalesScreen);

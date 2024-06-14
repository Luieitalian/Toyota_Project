import React from 'react';
import CustomButton from '../common/CustomButton';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import useGoToPastSalesStyle from './styles/useGoToPastSalesStyle';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const GoToPastSales = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useGoToPastSalesStyle(theme);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    console.log('Show past sales');
    navigation.navigate('PastSalesScreen');
  };

  return (
    <CustomButton overridingButtonStyles={styles} onPress={onPress}>
      {t('show_past_sales')}
    </CustomButton>
  );
};

export default GoToPastSales;

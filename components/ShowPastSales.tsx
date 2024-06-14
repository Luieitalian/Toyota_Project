import React, {useContext, useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import CustomButton from './common/CustomButton';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import useShowPastSalesStyle from './styles/useShowPastSalesStyle';
import {PastSalesContext} from '@/contexts/PastSalesContext/PastSalesContext';
import Receipt from './Receipt';
import CustomModal from './common/CustomModal';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ShowPastSales = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useShowPastSalesStyle(theme);
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

export default ShowPastSales;

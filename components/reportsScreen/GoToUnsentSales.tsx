import React, {memo} from 'react';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import CustomButton from '../common/CustomButton';
import useGoToUnsentSalesStyle from './styles/useGoToUnsentSalesStyle';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const GoToUnsentSales = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useGoToUnsentSalesStyle(theme);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    console.log('go_to_unsent_sales');
    navigation.navigate('UnsentSalesScreen');
  };

  return (
    <>
      <CustomButton overridingButtonStyles={styles} onPress={onPress}>
        {t('go_to_unsent_sales')}
      </CustomButton>
    </>
  );
};

export default memo(GoToUnsentSales);

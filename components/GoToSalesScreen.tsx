import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import useGoToSalesScreenStyle from './styles/useGoToSalesScreenStyle';

const GoToSalesScreen = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useGoToSalesScreenStyle(theme);

  const onPress = () => {
    console.log('go to sales screen');
  };

  return (
    <CustomButton styles={styles} onPress={onPress}>
      {t('go_to_sales_screen')}
    </CustomButton>
  );
};

export default memo(GoToSalesScreen);

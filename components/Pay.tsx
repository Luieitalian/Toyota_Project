import React, {memo} from 'react';
import usePayStyle from './styles/usePayStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';

const Pay = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePayStyle(theme);

  const onPress = () => {
    console.log('Pay');
  };

  return (
    <CustomButton styles={styles} onPress={onPress}>
      {t('pay')}
    </CustomButton>
  );
};

export default memo(Pay);

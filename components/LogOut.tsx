import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import useLogOutStyle from './styles/useLogOutStyle';

const LogOut = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useLogOutStyle(theme);

  const onPress = () => {
    console.log('log out');
  };

  return (
    <CustomButton styles={styles} onPress={onPress}>
      {t('log_out')}
    </CustomButton>
  );
};

export default memo(LogOut);

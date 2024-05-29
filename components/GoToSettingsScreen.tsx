import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import useGoToSettingsScreenStyle from './styles/useGoToSettingsScreenStyle';

const GoToSettingsScreen = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useGoToSettingsScreenStyle(theme);

  const onPress = () => {
    console.log('go to settings');
  };

  return (
    <CustomButton styles={styles} onPress={onPress}>
      {t('go_to_settings_screen')}
    </CustomButton>
  );
};

export default memo(GoToSettingsScreen);

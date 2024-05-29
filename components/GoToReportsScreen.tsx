import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import useGoToReportsScreenStyle from './styles/useGoToReportsScreenStyle';

const GoToReportsScreen = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useGoToReportsScreenStyle(theme);

  const onPress = () => {
    console.log('go to reports screen');
  };

  return (
    <CustomButton styles={styles} onPress={onPress}>
      {t('go_to_reports_screen')}
    </CustomButton>
  );
};

export default memo(GoToReportsScreen);

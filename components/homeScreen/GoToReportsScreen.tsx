import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from '../common/CustomButton';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useGoToReportsScreenStyle from './styles/useGoToReportsScreenStyle';

const GoToReportsScreen = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useGoToReportsScreenStyle(theme);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    console.log('Go to reports screen');
    navigation.navigate('ReportsScreen');
  };

  return (
    <CustomButton overridingButtonStyles={styles} onPress={onPress}>
      {t('go_to_reports_screen')}
    </CustomButton>
  );
};

export default memo(GoToReportsScreen);

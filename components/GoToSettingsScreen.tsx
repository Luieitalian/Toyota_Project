import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import useGoToSettingsScreenStyle from './styles/useGoToSettingsScreenStyle';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const GoToSettingsScreen = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useGoToSettingsScreenStyle(theme);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    console.log('Go to settings');
    navigation.navigate('SettingsScreen');
  };

  return (
    <CustomButton overridingButtonStyles={styles} onPress={onPress}>
      {t('go_to_settings_screen')}
    </CustomButton>
  );
};

export default memo(GoToSettingsScreen);

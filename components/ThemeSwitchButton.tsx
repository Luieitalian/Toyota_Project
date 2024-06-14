import React, {memo, useContext} from 'react';
import {Text, View} from 'react-native';
import {Switch, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '@/contexts/ThemeContext/ThemeContext';
import useThemeSwitchButtonStyle from './styles/useThemeSwitchButtonStyle';

const ThemeSwitchButton = () => {
  const {i18n, t} = useTranslation();
  const theme = useTheme();

  const {isDark, toggleTheme} = useContext(ThemeContext);

  const {styles} = useThemeSwitchButtonStyle(theme);

  return (
    <View style={styles.switchView}>
      <Text style={styles.text}>{t('dark_mode')}</Text>
      <Switch
        style={styles.switch}
        value={isDark}
        onValueChange={() => toggleTheme()}
      />
    </View>
  );
};

export default memo(ThemeSwitchButton);

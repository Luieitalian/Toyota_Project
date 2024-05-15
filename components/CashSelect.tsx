import {TFunction} from 'i18next';
import React, {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useCashSelectStyle from './styles/useCashSelectStyle';

type CashSelectProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const CashSelect = ({t, theme}: CashSelectProps) => {
  const {styles} = useCashSelectStyle(theme);

  const onPress = () => {
    console.log('Cash Select');
  };

  return (
    <Pressable
      android_ripple={{
        color: theme.colors.onSecondary,
        foreground: true,
      }}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{t('cash_select')}</Text>
    </Pressable>
  );
};

export default memo(CashSelect);

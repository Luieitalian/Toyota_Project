import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import usePickItemsStyle from './styles/usePickItemsStyle';

type PickItemsProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const PickItems = ({t, theme}: PickItemsProps) => {
  const {styles} = usePickItemsStyle(theme);

  const onPress = () => {
    console.log('pick items');
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
      <Text style={styles.text}>{t('pick_items')}</Text>
    </Pressable>
  );
};

export default memo(PickItems);

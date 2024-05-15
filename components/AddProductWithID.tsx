import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View, TextInput} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useAddProductWithIDStyle from './styles/useAddProductWithIDStyle';

type AddProductWithIDProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const AddProductWithID = ({t, theme}: AddProductWithIDProps) => {
  const onPress = () => {
    console.log('add product with id');
  };
  const {styles} = useAddProductWithIDStyle(theme);

  return (
    <Pressable
      android_ripple={{
        color: theme.colors.onSecondary,
        foreground: true,
      }}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{t('add_product_with_id')}</Text>
    </Pressable>
  );
};

export default memo(AddProductWithID);

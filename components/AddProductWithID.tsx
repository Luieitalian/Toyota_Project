import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View, TextInput} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useAddProductWithIDStyle from './styles/useAddProductWithIDStyle';
import CustomButton from './CustomButton';

type AddProductWithIDProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const AddProductWithID = ({t, theme}: AddProductWithIDProps) => {
  const {styles} = useAddProductWithIDStyle(theme);

  const onPress = () => {
    console.log('add product with id');
  };

  return (
    <CustomButton theme={theme} styles={styles} onPress={onPress}>
      {t('add_product_with_id')}
    </CustomButton>
  );
};

export default memo(AddProductWithID);

import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import usePickItemsStyle from './styles/usePickItemsStyle';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type PickItemsProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const PickItems = ({t, theme}: PickItemsProps) => {
  const {styles} = usePickItemsStyle(theme);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    console.log('pick items');
    navigation.navigate('ProductsScreen');
  };

  return (
    <CustomButton onPress={onPress} styles={styles} theme={theme}>
      {t('pick_items')}
    </CustomButton>
  );
};

export default memo(PickItems);

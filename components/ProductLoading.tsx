import React, {memo} from 'react';
import {Image, Text, View} from 'react-native';
import {TFunction} from 'i18next';
import {ActivityIndicator, MD3Theme} from 'react-native-paper';
import {ProductModel} from '@/models/ProductModel';
import useProductLoadingStyle from './styles/useProductLoadingStyle';

type ProductLoadingProps = {
  theme: MD3Theme;
};

const ProductLoading = ({theme}: ProductLoadingProps) => {
  const {styles} = useProductLoadingStyle(theme);

  return (
    <View style={styles.productLoadingContainer}>
      <ActivityIndicator />
    </View>
  );
};

export default memo(ProductLoading);

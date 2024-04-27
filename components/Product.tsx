import React, {memo} from 'react';
import {Image, Text, View} from 'react-native';
import useProductStyle from './styles/useProductStyle';
import {TFunction} from 'i18next';
import {ActivityIndicator, MD3Theme} from 'react-native-paper';
import {ProductModel} from '../models/ProductModel';
import useProductImage from '../hooks/useProductImage';

type ProductProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  prod: ProductModel;
};

const Product = ({t, theme, prod}: ProductProps) => {
  const {styles} = useProductStyle(theme);
  const {imageURL, loadingImageURL} = useProductImage(prod);

  return (
    <View style={styles.productContainer}>
      {loadingImageURL ? (
        <ActivityIndicator theme={theme} />
      ) : (
        <Image style={styles.image} source={{uri: imageURL}} />
      )}
      <Text style={styles.price}>{prod.price}</Text>
      <Text style={styles.name}>{prod.name}</Text>
      <Text style={styles.amount_attribute}>{prod.amount_attribute}</Text>
    </View>
  );
};

export default memo(Product);

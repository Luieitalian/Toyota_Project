import React, {memo, Suspense, useCallback, useContext} from 'react';
import {Image, Text, View} from 'react-native';
import useProductStyle from './styles/useProductStyle';
import {TFunction} from 'i18next';
import {ActivityIndicator, IconButton, MD3Theme} from 'react-native-paper';
import {ProductModel} from '../models/ProductModel';
import useProductImage from '../hooks/useProductImage';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import {CartProductModel} from '../models/CartProductModel';
import FastImage from 'react-native-fast-image';

type ProductProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  prod: ProductModel;
  addToCart: (prod: CartProductModel) => void;
};

const Product = ({t, theme, prod, addToCart}: ProductProps) => {
  const {styles} = useProductStyle(theme);
  const {imageURL, loadingImageURL} = useProductImage(prod);

  const onPress = useCallback(() => {
    addToCart({prod: prod, _cart_amount: 1});
  }, []);

  return (
    <View style={styles.productContainer}>
      <>
        {loadingImageURL ? (
          <ActivityIndicator theme={theme} />
        ) : (
          <FastImage
            resizeMode="contain"
            style={styles.image}
            source={{uri: imageURL}}
          />
        )}

        <Text style={styles.price}>{prod.price}</Text>
        <Text style={styles.name}>{prod.name}</Text>
        <Text style={styles.amount_attribute}>{prod.amount_attribute}</Text>
        <IconButton
          iconColor={styles.addButtonColors.color}
          containerColor={styles.addButtonColors.backgroundColor}
          icon="plus"
          mode="outlined"
          onPress={onPress}
          size={styles.addButtonSize.width}
          style={styles.addButton}
        />
      </>
    </View>
  );
};

const arePropsEqual = (
  prev: Readonly<ProductProps>,
  next: Readonly<ProductProps>
) => {
  return prev.prod.id === next.prod.id;
};

export default memo(Product, arePropsEqual);

import React, {
  memo,
  Suspense,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {Image, Text, View} from 'react-native';
import useProductStyle from './styles/useProductStyle';
import {TFunction} from 'i18next';
import {ActivityIndicator, IconButton, MD3Theme} from 'react-native-paper';
import {ProductModel} from '../models/ProductModel';
import useProductImage from '../hooks/useProductImage';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import {CartProductModel} from '../models/CartProductModel';
import FastImage from 'react-native-fast-image';
import {FavoritesContext} from '../contexts/FavoritesContext';

type ProductProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  prod: ProductModel;
  isFavorite: boolean;
  addToCart: (prod: CartProductModel) => void;
  addToFavorites: (prod_id: string) => void;
  removeFromFavorites: (prod_id: string) => void;
};

const Product = ({
  t,
  theme,
  prod,
  isFavorite,
  addToCart,
  addToFavorites,
  removeFromFavorites,
}: ProductProps) => {
  const {styles} = useProductStyle(theme);
  const {imageURL, loadingImageURL} = useProductImage(prod);
  const [isStarred, setIsStarred] = useState<boolean>(isFavorite);

  const onAddPress = useCallback(() => {
    addToCart({prod: prod, _cart_amount: 1});
  }, [prod, addToCart]);

  const onStarPress = () => {
    if (isStarred) {
      setIsStarred(false);
      removeFromFavorites(prod.id);
    } else {
      addToFavorites(prod.id);
      setIsStarred(true);
    }
  };

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
          onPress={onAddPress}
          size={styles.addButtonSize.width}
          style={styles.addButton}
        />
        <IconButton
          iconColor={styles.favoriteButtonColors.color}
          containerColor={styles.favoriteButtonColors.backgroundColor}
          icon={isStarred ? 'star' : 'star-outline'}
          mode="outlined"
          onPress={onStarPress}
          size={styles.favoriteButtonSize.width}
          style={styles.favoriteButton}
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

import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {ProductModel} from '@/models/ProductModel';
import useProductsStyle from './styles/useProductsStyle';
import {ActivityIndicator, useTheme} from 'react-native-paper';
import Product from '../common/Product';
import {ProductsContext} from '@/contexts/ProductsContext/ProductsContext';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import {FavoritesContext} from '@/contexts/FavoritesContext/FavoritesContext';
import {Categories} from '@/globals/categories';
import useFilteredProducts from '@/hooks/useFilteredProducts';

type ProductsProps = {
  category: string;
  submittedText?: string | undefined;
};

const Products = ({category, submittedText}: ProductsProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useProductsStyle(theme);

  const {addToCart} = useContext(ShoppingCartContext);
  const {favorites, isFavorite, addToFavorites, removeFromFavorites} =
    useContext(FavoritesContext);
  const {products} = useContext(ProductsContext);

  const [pageOffset, setPageOffset] = useState<number>(1);
  const [productsShown, setProductsShown] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(true);

  const initialLoadNumber = 16;

  const filteredProducts = useFilteredProducts({
    submittedText,
    products,
    favorites,
    category,
  });

  const renderItem = ({item}: ListRenderItemInfo<ProductModel>) => (
    <Product
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
      isFavorite={isFavorite(item)}
      addToCart={addToCart}
      prod={item}
    />
  );

  const keyExtractor = (item: ProductModel) => item.id;

  const ListEmptyComponent = () => {
    return (
      <View style={styles.listEmptyView}>
        <Text style={styles.listEmptyViewText}>{t('no_item_in_products')}</Text>
      </View>
    );
  };

  const onEndReached = () => {
    console.log('onEndReached: ', pageOffset);
    setPageOffset((o) => o + 1);
  };

  useEffect(() => {
    setLoading(true);
  }, [category, submittedText]);

  useEffect(() => {
    setPageOffset(1);
  }, [category]);

  useEffect(() => {
    setProductsShown(filteredProducts.slice(0, pageOffset * initialLoadNumber));
    setLoading(false);
  }, [filteredProducts, pageOffset]);

  return (
    <View style={styles.flatlistContainer}>
      {loading ? (
        <>
          <Text style={styles.pleaseWait}>{t('please_wait')}</Text>
          <ActivityIndicator />
        </>
      ) : (
        <FlatList
          key={styles.numColumns.width} // to force a fresh render on change numcolumns
          columnWrapperStyle={styles.flatlist}
          numColumns={styles.numColumns.width}
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={1000}
          initialNumToRender={3}
          removeClippedSubviews={false}
          data={productsShown}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.4}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </View>
  );
};

export default memo(Products);

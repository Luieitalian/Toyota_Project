import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {ProductModel} from '../models/ProductModel';
import useProductsStyle from './styles/useProductsStyle';
import {ActivityIndicator, useTheme} from 'react-native-paper';
import Product from './Product';
import {ProductsContext} from '../contexts/ProductsContext';
import {FavoritesContext} from '../contexts/FavoritesContext';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext/ShoppingCartContext';

type ProductsProps = {
  category?: string | undefined;
  submittedText?: string | undefined;
};

const Products = ({category, submittedText}: ProductsProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useProductsStyle(theme);

  const {addToCart} = useContext(ShoppingCartContext);
  const {products} = useContext(ProductsContext);
  const {favorites, isFavorite, addToFavorites, removeFromFavorites} =
    useContext(FavoritesContext);

  const [pageOffset, setPageOffset] = useState<number>(1);
  const [productsShown, setProductsShown] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(true);

  const initialLoadNumber = 16;

  const filterProducts = useMemo(() => {
    let filteredProducts: ProductModel[] = products;

    if (submittedText !== undefined) {
      filteredProducts = filteredProducts.filter((prod: ProductModel) =>
        prod.name
          .trim()
          .toLocaleLowerCase('tr')
          .includes(submittedText.trim().toLocaleLowerCase('tr'))
      );
    }

    if (category === 'favorites') {
      filteredProducts = filteredProducts.filter((prod: ProductModel) => {
        if (favorites.length <= 0) {
          return false;
        } else {
          return favorites.includes(prod.id);
        }
      });
    } else if (category !== 'show_all') {
      filteredProducts = filteredProducts.filter(
        (prod: ProductModel) => prod.category === category
      );
    }

    console.log('category: ', category);
    console.log('submittedText: ', submittedText);
    return filteredProducts;
  }, [submittedText, category]);

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
    console.log('onEndReached ', pageOffset);
    setPageOffset((o) => o + 1);
  };

  useEffect(() => {
    setLoading(true);
  }, [category, submittedText]);

  useEffect(() => {
    setPageOffset(1);
  }, [category]);

  useEffect(() => {
    setProductsShown(filterProducts.slice(0, pageOffset * initialLoadNumber));
    setLoading(false);
  }, [filterProducts, pageOffset]);

  return (
    <View style={styles.flatlistContainer}>
      {loading ? (
        <>
          <Text style={styles.pleaseWait}>{t('please_wait')}</Text>
          <ActivityIndicator />
        </>
      ) : (
        <FlatList
          columnWrapperStyle={styles.flatlist}
          numColumns={4}
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={1000}
          initialNumToRender={3}
          removeClippedSubviews={false}
          data={productsShown}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.2}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </View>
  );
};

export default memo(Products);

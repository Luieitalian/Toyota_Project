import {useCallback, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosError} from 'axios';
import {ProductModel} from '../models/ProductModel';

type useProductsArgs = {
  isOnline: boolean;
};

const useProducts = ({isOnline}: useProductsArgs) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  const getProductsFromServer = async () => {
    console.log(`Trying to get products from server!`);
    await axios
      .get('http://10.0.2.2:3000/products') // 10.0.2.2 Special alias to the host loopback interface
      .then((res) => {
        console.log('Getting products from server!');

        const _products = res.data as ProductModel[];

        // set _products & set loading false
        setProducts(_products);
        setLoadingProducts(false);
      })
      .catch((error: AxiosError) => {
        console.log(`Can't get products from server!`, error.cause);
      });
  };

  const getProductsFromLocalDB = async () => {
    console.log(`Trying to get products from local database!`);
    await AsyncStorage.getItem('database') // if prods exist in local storage then simply get them
      .then((local_db_string) => {
        console.log('Getting products from local database!');

        const _products = JSON.parse(local_db_string as string)
          .products as ProductModel[];

        // set _products & set loading false
        setProducts(_products);
        setLoadingProducts(false);

        AsyncStorage.flushGetRequests();
      })
      .catch((error) => {
        console.log(
          'Local database is empty (Forgot to call setDatabase hook?)',
          error
        );
      });
  };

  useEffect(() => {
    setLoadingProducts(true);
    if (isOnline) {
      getProductsFromServer();
    } else {
      getProductsFromLocalDB();
    }
    return () => console.log('returning from effect');
  }, [isOnline]);

  return {products, loadingProducts};
};

export default useProducts;

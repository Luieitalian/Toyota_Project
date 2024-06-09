import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosError} from 'axios';
import {ProductModel} from '../models/ProductModel';

type useProductsArgs = {
  isOnline: boolean;
  isDatabaseInitialized: boolean;
};

const useProducts = ({isOnline, isDatabaseInitialized}: useProductsArgs) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  const getProductsFromServer = async () => {
    console.log(`Trying to get products from server!`);
    try {
      const res = await axios.get('http://10.0.2.2:3000/products'); // Special alias to the host loopback interface
      console.log('Getting products from server!');
      const _products = res.data as ProductModel[];
      setProducts(_products);
      setLoadingProducts(false);
    } catch (error) {
      console.log(`Can't get products from server!`, error);
    }
  };

  const getProductsFromLocalDB = async () => {
    console.log(`Trying to get products from local database!`);
    try {
      const local_db_string = await AsyncStorage.getItem('database'); // if products exist in local storage then simply get them
      console.log('Getting products from local database!');
      const _products = JSON.parse(local_db_string as string)
        .products as ProductModel[];
      setProducts(_products);
      setLoadingProducts(false);
    } catch (error) {
      console.log(
        'Local database is empty (Forgot to call setDatabase hook?)',
        error
      );
    }
  };

  useEffect(() => {
    if (!isDatabaseInitialized) {
      return;
    }

    setLoadingProducts(true);
    if (isOnline) {
      getProductsFromServer();
    } else {
      getProductsFromLocalDB();
    }
  }, [isOnline, isDatabaseInitialized]);

  return {products, loadingProducts};
};

export default useProducts;

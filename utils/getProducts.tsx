import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ProductModel} from '@/models/ProductModel';
import {HOST_LOOPBACK_INTERFACE} from '@env';

type getProductsArgs = {
  isOnline: boolean;
  isDatabaseInitialized: boolean;
};

const getProducts = ({isOnline, isDatabaseInitialized}: getProductsArgs) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  const getSetProductsFromServer = async () => {
    console.log(`Trying to get products from server!`);

    axios
      .get(`http://${HOST_LOOPBACK_INTERFACE}/products`)
      .then((res) => {
        console.log('Getting products from server!');

        const _products = res.data as ProductModel[];

        setProducts(_products);
        setLoadingProducts(false);
      })
      .catch((e) => {
        console.log("Can't get products from server (Server may be down)");
      });
  };

  const getSetProductsFromLocalDB = async () => {
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
      getSetProductsFromServer();
    } else {
      getSetProductsFromLocalDB();
    }
  }, [isOnline, isDatabaseInitialized]);

  return {products, loadingProducts};
};

export default getProducts;

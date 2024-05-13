import {useCallback, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import dev_local_db from '../db/db.json';
import {ProductModel} from '../models/ProductModel';

const useProducts = (
  isOnline: boolean,
  optionalSearchText: string | undefined,
  optionalCategory: string | undefined
) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  const getProductsFromServer = async () => {
    await axios
      .get('http://10.0.2.2:3000/products') // 10.0.2.2 Special alias to the host loopback interface
      .then((res) => {
        console.log('Getting products from server!');

        let filteredProds = res.data as ProductModel[];

        if (optionalSearchText !== undefined) {
          filteredProds = filteredProds.filter((prod: ProductModel) =>
            prod.name.toLocaleLowerCase('tr').includes(optionalSearchText)
          );
        }

        if (optionalCategory !== undefined) {
          filteredProds = filteredProds.filter(
            (prod: ProductModel) => prod.category === optionalCategory
          );
        }

        setProducts(filteredProds);
        setLoadingProducts(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProductsFromLocalDB = async () => {
    try {
      let filteredProds: ProductModel[];
      await AsyncStorage.getItem('database') // if prods exist in local storage then simply get them
        .then((local_db_string) => {
          console.log('Getting products from local storage!');

          filteredProds = JSON.parse(local_db_string as string)
            .products as ProductModel[];

          // Filter for search text
          if (optionalSearchText !== undefined) {
            filteredProds = filteredProds.filter((prod: ProductModel) =>
              prod.name.toLocaleLowerCase('tr').includes(optionalSearchText)
            );
          }
          // Filter for category
          if (optionalCategory !== undefined) {
            filteredProds = filteredProds.filter(
              (prod: ProductModel) => prod.category === optionalCategory
            );
          }
        })
        .catch(async (e) => {
          console.log(
            'Local database is empty (Forgot to call setDatabase hook?)'
          );
        })
        .finally(() => {
          // set products & set loading false
          setProducts(filteredProds);
          setLoadingProducts(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoadingProducts(true);
    if (isOnline) {
      getProductsFromServer();
    } else {
      getProductsFromLocalDB();
    }
    return () => console.log('returning from effect');
  }, [optionalSearchText, optionalCategory]);

  return {products, loadingProducts};
};

export default useProducts;

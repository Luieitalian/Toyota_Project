import {useCallback, useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import dev_local_products from '../db/db.json';
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
      await AsyncStorage.getItem('products') // if prods exist in local storage then simply get them
        .then((local_data_string) => {
          console.log('Getting products from local storage!');

          filteredProds = JSON.parse(
            local_data_string as string
          ) as ProductModel[];

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
        })
        .catch(async () => {
          // if local storage is empty then add prods and get them
          console.log('Local products is empty!');
          console.log('Adding products to async storage from local server!');

          await AsyncStorage.setItem(
            'products',
            JSON.stringify(dev_local_products.products)
          );

          console.log('Getting products from local storage!');
          let local_data_string = await AsyncStorage.getItem('products');

          filteredProds = JSON.parse(
            local_data_string as string
          ) as ProductModel[];

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

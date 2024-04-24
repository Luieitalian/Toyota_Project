import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import dev_local_products from '../db/all_products.json';

const useProducts = (isOnline: boolean) => {
  const [products, setProducts] = useState<string>();

  useEffect(() => {
    if (isOnline) {
      const getProductsFromServer = async () => {
        await axios
          .get('http://10.0.2.2:3001/products') // 10.0.2.2 Special alias to the host loopback interface
          .then((res) => {
            const data = JSON.stringify(res.data);
            setProducts(data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      getProductsFromServer();
    } else {
      const getProductsFromLocalDB = async () => {
        try {
          let data = await AsyncStorage.getItem('products');
          if (data === null) {
            console.log('Local products is empty!');
            console.log('Adding products to async storage from local server!');
            await AsyncStorage.setItem(
              'products',
              JSON.stringify(dev_local_products.products)
            );
          }
          data = await AsyncStorage.getItem('products');
          //console.log(data);
          setProducts(data as string);
        } catch (error) {
          console.log(error);
        }
      };
      getProductsFromLocalDB();
    }
  }, [isOnline]);

  return products;
};

export default useProducts;

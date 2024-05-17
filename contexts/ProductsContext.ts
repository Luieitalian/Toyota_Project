import {createContext} from 'react';
import {ProductModel} from '../models/ProductModel';

export const ProductsContext = createContext({
  products: [] as ProductModel[],
  loadingProducts: true,
});

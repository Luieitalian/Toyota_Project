import {createContext} from 'react';
import {ProductModel} from '@/models/ProductModel';

interface ProductsContextType {
  products: ProductModel[];
  loadingProducts: boolean;
}

export const ProductsContext = createContext<ProductsContextType>(
  {} as ProductsContextType
);

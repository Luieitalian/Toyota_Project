import React, {memo, useMemo, useState} from 'react';
import useProducts from '../../hooks/useProducts';
import {ProductsContext} from './ProductsContext';

type ProductsContextProviderProps = {
  children: React.ReactNode;
};

const ProductsContextProvider = ({children}: ProductsContextProviderProps) => {
  const {products, loadingProducts} = useProducts({
    isOnline: false, // TODO
    isDatabaseInitialized: true, // TODO
  });

  const productsContext = useMemo(
    () => ({
      products: products,
      loadingProducts: loadingProducts,
    }),
    [products, loadingProducts]
  );

  if (!productsContext) {
    throw new Error('productsContext does not exist.');
  }

  return (
    <ProductsContext.Provider value={productsContext}>
      {children}
    </ProductsContext.Provider>
  );
};

export default memo(ProductsContextProvider);

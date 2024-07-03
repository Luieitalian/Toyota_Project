import React, {memo, useContext, useEffect, useMemo, useState} from 'react';
import {ProductsContext} from './ProductsContext';
import setDatabase from '@/utils/setDatabase';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';
import getProducts from '@/utils/getProducts';

export type ProductsContextProviderProps = {
  children: React.ReactNode;
  isDatabaseInitialized: boolean;
};

const ProductsContextProvider = ({
  children,
  isDatabaseInitialized,
}: ProductsContextProviderProps) => {
  const {isOnline} = useContext(StatusContext);

  const {products, loadingProducts} = getProducts({
    isOnline: isOnline,
    isDatabaseInitialized: isDatabaseInitialized,
  });

  const productsContext = useMemo(
    () => ({
      products: products,
      loadingProducts: loadingProducts,
    }),
    [products, loadingProducts]
  );

  if (!productsContext) {
    return <>{children}</>;
  }

  return (
    <ProductsContext.Provider value={productsContext}>
      {children}
    </ProductsContext.Provider>
  );
};

export default memo(ProductsContextProvider);

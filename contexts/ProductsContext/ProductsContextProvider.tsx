import React, {memo, useContext, useEffect, useMemo, useState} from 'react';
import {ProductsContext} from './ProductsContext';
import setDatabase from '@/utils/setDatabase';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';
import getProducts from '@/utils/getProducts';

type ProductsContextProviderProps = {
  children: React.ReactNode;
};

const ProductsContextProvider = ({children}: ProductsContextProviderProps) => {
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false);
  const {isOnline} = useContext(StatusContext);

  useEffect(() => {
    const initializeDatabase = async () => {
      await setDatabase();
      setIsDatabaseInitialized(true);
    };
    initializeDatabase();
  }, []);

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

import React, {memo, useContext, useEffect, useMemo, useState} from 'react';
import useProducts from '../../hooks/useProducts';
import {ProductsContext} from './ProductsContext';
import setDatabase from '../../utils/setDatabase';
import {StatusContext} from '../StatusContext/StatusContext';

type ProductsContextProviderProps = {
  children: React.ReactNode;
};

const ProductsContextProvider = ({children}: ProductsContextProviderProps) => {
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false);
  const {isOnline} = useContext(StatusContext);

  // TODO move this logic to another component
  useEffect(() => {
    const initializeDatabase = async () => {
      await setDatabase();
      setIsDatabaseInitialized(true);
    };
    console.log('effect run');
    initializeDatabase();
  }, []);

  const {products, loadingProducts} = useProducts({
    isOnline: isOnline, // TODO
    isDatabaseInitialized: isDatabaseInitialized, // TODO
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

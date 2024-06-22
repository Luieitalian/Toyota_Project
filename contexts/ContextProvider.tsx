import React, {memo, useEffect, useState} from 'react';
import StatusContextProvider from './StatusContext/StatusContextProvider';
import ProductsContextProvider from './ProductsContext/ProductsContextProvider';
import FavoritesContextProvider from './FavoritesContext/FavoritesContextProvider';
import ShoppingCartContextProvider from './ShoppingCartContext/ShoppingCartContextProvider';
import PastSalesContextProvider from './PastSalesContext/PastSalesContextProvider';
import ThemeContextProvider from './ThemeContext/ThemeContextProvider';
import UnsentCartsContextProvider from './UnsentSalesContext/UnsentSalesContextProvider';
import SafeAreaProviderWrapper from './SafeAreaProviderWrapper/SafeAreaProviderWrapper';
import PaperProviderWrapper from './PaperProviderWrapper/PaperProviderWrapper';
import UsersContextProvider from './UsersContext/UsersContextProvider';
import ServiceContextProvider from './ServiceContext/ServiceContextProvider';
import SpecialOffersContextProvider from './SpecialOffersContext/SpecialOffersContextProvider';
import setDatabase from '@/utils/setDatabase';

type ContextProviderProps = {
  children: React.ReactNode;
};

const ContextProvider = ({children}: ContextProviderProps) => {
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false);

  useEffect(() => {
    const initializeDatabase = async () => {
      await setDatabase().then(() => {
        console.log('resolved');
        if (!isDatabaseInitialized) setIsDatabaseInitialized(true);
      });
    };
    initializeDatabase();
  }, [isDatabaseInitialized]);

  return (
    <StatusContextProvider>
      <ProductsContextProvider isDatabaseInitialized={isDatabaseInitialized}>
        <FavoritesContextProvider>
          <ShoppingCartContextProvider>
            <PastSalesContextProvider>
              <UnsentCartsContextProvider>
                <UsersContextProvider>
                  <ServiceContextProvider>
                    <SpecialOffersContextProvider>
                      <ThemeContextProvider>
                        <PaperProviderWrapper>
                          <SafeAreaProviderWrapper>
                            {children}
                          </SafeAreaProviderWrapper>
                        </PaperProviderWrapper>
                      </ThemeContextProvider>
                    </SpecialOffersContextProvider>
                  </ServiceContextProvider>
                </UsersContextProvider>
              </UnsentCartsContextProvider>
            </PastSalesContextProvider>
          </ShoppingCartContextProvider>
        </FavoritesContextProvider>
      </ProductsContextProvider>
    </StatusContextProvider>
  );
};

export default memo(ContextProvider);

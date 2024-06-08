import React, {memo} from 'react';
import StatusContextProvider from './StatusContext/StatusContextProvider';
import ProductsContextProvider from './ProductsContext/ProductsContextProvider';
import FavoritesContextProvider from './FavoritesContext/FavoritesContextProvider';
import ShoppingCartContextProvider from './ShoppingCartContext/ShoppingCartContextProvider';
import PastSalesContextProvider from './PastSalesContext/PastSalesContextProvider';
import ThemeContextProvider from './ThemeContext/ThemeContextProvider';
import UnsentCartsContextProvider from './UnsentCartsContext/UnsentCartsContextProvider';
import SafeAreaProviderWrapper from './SafeAreaProviderWrapper/SafeAreaProviderWrapper';
import PaperProviderWrapper from './PaperProviderWrapper/PaperProviderWrapper';
import UsersContextProvider from './UserContext/UsersContextProvider';
import ServiceContextProvider from './ServiceContext/ServiceContextProvider';

type ContextProviderProps = {
  children: React.ReactNode;
};

const ContextProvider = ({children}: ContextProviderProps) => {
  return (
    <StatusContextProvider>
      <ProductsContextProvider>
        <FavoritesContextProvider>
          <ShoppingCartContextProvider>
            <PastSalesContextProvider>
              <UnsentCartsContextProvider>
                <UsersContextProvider>
                  <ServiceContextProvider>
                    <ThemeContextProvider>
                      <PaperProviderWrapper>
                        <SafeAreaProviderWrapper>
                          {children}
                        </SafeAreaProviderWrapper>
                      </PaperProviderWrapper>
                    </ThemeContextProvider>
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

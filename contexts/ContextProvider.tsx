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
import UserContextProvider from './UserContext/UserContextProvider';

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
                <UserContextProvider>
                  <ThemeContextProvider>
                    <PaperProviderWrapper>
                      <SafeAreaProviderWrapper>
                        {children}
                      </SafeAreaProviderWrapper>
                    </PaperProviderWrapper>
                  </ThemeContextProvider>
                </UserContextProvider>
              </UnsentCartsContextProvider>
            </PastSalesContextProvider>
          </ShoppingCartContextProvider>
        </FavoritesContextProvider>
      </ProductsContextProvider>
    </StatusContextProvider>
  );
};

export default memo(ContextProvider);

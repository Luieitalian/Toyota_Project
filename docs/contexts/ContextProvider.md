# `ContextProvider` Component Documentation

## Overview

The `ContextProvider` component is a high-level component responsible for providing context providers to the entire application. It wraps multiple context providers such as `StatusContextProvider`, `ProductsContextProvider`, `FavoritesContextProvider`, etc., to manage global state and share data across different parts of the application.

## Dependencies

- `react`
- `react-native`

## Component Definition

```javascript
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
import SpecialOffersContextProvider from './SpecialOffersContext/SpecialOffersContextProvider';

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
```

## Usage

### Props

- `children`: React node representing the child components wrapped by the context providers.

# `ProductsContext` Documentation

## Overview

The `ProductsContext` is a context that provides access to products data and loading state.

## Context Type

### `products`

- Type: `ProductModel[]`
- Description: An array containing product data.

### `loadingProducts`

- Type: `boolean`
- Description: A boolean value indicating whether products are currently being loaded.

## Usage

### Importing

```javascript
import {ProductsContext} from './path/to/ProductsContext';
```

### Example

```javascript
import React, {useState, useEffect} from 'react';
import {ProductsContext} from './path/to/ProductsContext';
import {fetchProducts} from './api/products';
import ProductsList from './components/ProductsList';

const App = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoadingProducts(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <ProductsContext.Provider value={{products, loadingProducts}}>
      <ProductsList />
    </ProductsContext.Provider>
  );
};

export default App;
```

## Explanation

- The `ProductsContext` context provides access to products data and loading state across components in the application.
- It allows components to read the `products` array and `loadingProducts` boolean, enabling them to display product data and loading indicators accordingly.
- Components can consume this context to access products data and loading state without having to pass props through multiple levels of the component tree.

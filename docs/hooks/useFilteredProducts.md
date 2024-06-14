## `useFilteredProducts` Custom Hook Documentation

### Overview

The `useFilteredProducts` hook is a custom hook designed for the HızlıPos React Native application. It filters a list of products based on the selected category, favorite status, and a submitted search text. This hook leverages the `useMemo` hook for efficient re-computation of filtered results only when relevant dependencies change.

### Dependencies

This hook relies on the following dependencies:

- **React**: For using hooks like `useMemo`.
- **Categories**: An array of predefined category strings.
- **ProductModel**: The model representing a product.

### Hook Definition

#### Parameters

The hook accepts an object with the following properties:

- **products** (`ProductModel[]`): An array of product objects to be filtered.
- **favorites** (`string[]`): An array of product IDs that are marked as favorites.
- **submittedText** (`string | undefined`): A text string used for filtering products by name. If undefined, no text filtering is applied.
- **category** (`string`): The category by which to filter products. Possible values include predefined categories such as 'show_all' and 'favorites'.

#### Return Value

- **filteredProducts** (`ProductModel[]`): An array of products filtered according to the provided category, favorite status, and submitted text.

#### Implementation

```javascript
import React, {useMemo} from 'react';
import {Categories} from '@/globals/categories';
import {ProductModel} from '@/models/ProductModel';

type useFilteredProductsProps = {
  products: ProductModel[];
  favorites: string[];
  submittedText: string | undefined;
  category: string;
};

const useFilteredProducts = ({
  submittedText,
  products,
  favorites,
  category,
}: useFilteredProductsProps) => {
  const categoryAndProducts = useMemo(() => {
    let categoryAndProducts = {} as {[x: string]: ProductModel[]};
    Categories.forEach((category: string) => {
      if (category === 'show_all') {
        categoryAndProducts[category] = products;
      } else if (category === 'favorites') {
        categoryAndProducts[category] = products.filter((prod: ProductModel) =>
          favorites.includes(prod.id)
        );
      } else {
        categoryAndProducts[category] = products.filter(
          (prod: ProductModel) => prod.category === category
        );
      }
    });
    return categoryAndProducts;
  }, [favorites, products]);

  const filteredProducts = useMemo(() => {
    let filteredProducts = categoryAndProducts[category];

    console.log('favorites: ', favorites);

    if (submittedText !== undefined) {
      filteredProducts = filteredProducts.filter((prod: ProductModel) =>
        prod.name
          .trim()
          .toLocaleLowerCase('tr')
          .includes(submittedText.trim().toLocaleLowerCase('tr'))
      );
    }

    console.log('filteredproducts: ', filteredProducts.slice(0, 4));
    console.log('category: ', category);
    console.log('submittedText: ', submittedText);

    return filteredProducts;
  }, [favorites, category, submittedText, categoryAndProducts]);

  return filteredProducts;
};

export default useFilteredProducts;
```

### Usage

To use the `useFilteredProducts` hook in your React Native component, import it and call it with the appropriate parameters:

```javascript
import React from 'react';
import useFilteredProducts from './path/to/useFilteredProducts';
import {ProductModel} from './models/ProductModel';

const ProductListScreen = ({products, favorites, submittedText, category}) => {
  const filteredProducts = useFilteredProducts({
    products,
    favorites,
    submittedText,
    category,
  });

  return (
    <FlatList
      data={filteredProducts}
      renderItem={({item}) => <ProductItem product={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ProductListScreen;
```

### Explanation

1. **Category and Products Mapping**: The hook first maps the products to their respective categories using `useMemo` to ensure efficient re-computation.
2. **Filtering Products**: The hook then filters the products based on the selected category and the submitted search text. This step is also optimized with `useMemo`.

3. **Debugging Logs**: Several `console.log` statements are included to aid in debugging. These can be removed in a production environment.

This hook is designed to efficiently manage and filter product lists in the HızlıPos React Native app, ensuring optimal performance and a smooth user experience.

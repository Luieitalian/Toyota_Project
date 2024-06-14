# `useFavoriteProductsFunctions` Hook Documentation

## Overview

The `useFavoriteProductsFunctions` hook is a custom React hook used in the HızlıPos React application to manage the favorite products list. It provides functions to add and remove products from the favorites list.

## Dependencies

- `react`
- `@/models/ProductModel`

## Hook Definition

```js
import {Dispatch, useCallback} from 'react';
import {ProductModel} from '@/models/ProductModel';

const useFavoriteProductsFunctions = (
  setFavorites: Dispatch<React.SetStateAction<string[]>>
) => {
  const removeFromFavorites = useCallback((prod_id: string) => {
    setFavorites((favorites) => {
      if (!favorites.includes(prod_id)) {
        console.log(
          `Product with id '${prod_id}' is not a favorite! No action taken.`
        );
        return favorites;
      } else {
        console.log(
          `Product with id '${prod_id}' is removed from favorite products!`
        );
        return favorites.filter((fav) => fav !== prod_id);
      }
    });
  }, []);

  const addToFavorites = useCallback((prod_id: string) => {
    setFavorites((favorites) => {
      if (favorites === undefined) {
        console.log(`Adding product with id '${prod_id}' to favorites!`);
        return [prod_id];
      } else {
        if (favorites.includes(prod_id)) {
          console.log(
            `Product with id '${prod_id}' is already a favorite! No action taken.`
          );
          return favorites;
        } else {
          console.log(`Adding product with id '${prod_id}' to favorites!`);
          return [...favorites, prod_id];
        }
      }
    });
  }, []);

  return {addToFavorites, removeFromFavorites};
};

export default useFavoriteProductsFunctions;
```

## Usage

### Arguments

- `setFavorites`: A state setter function for the favorites list, which is a `Dispatch` function to update the state of favorite product IDs.

### Returns

- `addToFavorites`: A function to add a product to the favorites list.
- `removeFromFavorites`: A function to remove a product from the favorites list.

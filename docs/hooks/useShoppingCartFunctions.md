# `useShoppingCartFunctions` Hook Documentation

## Overview

The `useShoppingCartFunctions` hook is a custom React hook used in the HızlıPos React application to manage shopping cart functionality. It provides functions to add, remove, decrease quantity, or clear items from the shopping cart.

## Dependencies

- `react`
- `@/models/CartProductModel`

## Hook Definition

```js
import {Dispatch, SetStateAction, useCallback} from 'react';
import {CartProductModel} from '@/models/CartProductModel';

const useShoppingCartFunctions = (
  setShoppingCart: Dispatch<SetStateAction<CartProductModel[]>>
) => {
  const addToCart = useCallback((prod: CartProductModel) => {
    setShoppingCart((c) => {
      if (
        c.some((product: CartProductModel) => product.prod.id === prod.prod.id)
      ) {
        const cart_without_prod = c.filter(
          (cart_prod: CartProductModel) => cart_prod.prod.id !== prod.prod.id
        );

        const old_cart_prod = c.filter(
          (cart_prod: CartProductModel) => cart_prod.prod.id === prod.prod.id
        )[0];

        if (old_cart_prod === undefined) {
          console.log(
            `There were no products that matches the id '${prod.prod.id}' to call 'addToCart' on.`
          );
          return c;
        }

        const new_prod = {
          ...old_cart_prod,
          _cart_amount: old_cart_prod._cart_amount + 1,
        };

        console.log(`Adding product with id '${prod.prod.id}' to the cart.`);
        return [...cart_without_prod, new_prod];
      } else {
        console.log(`Adding product with id '${prod.prod.id}' to the cart.`);
        return [...c, prod];
      }
    });
  }, []);

  const removeFromCart = useCallback((prod_id: string) => {
    setShoppingCart((c) => {
      const new_cart = c.filter(
        (cart_prod: CartProductModel) => cart_prod.prod.id !== prod_id
      );
      if (new_cart.length === c.length) {
        console.log(
          `There were no products to be removed with the id '${prod_id}'.`
        );
      }
      return new_cart;
    });
  }, []);

  const removeOne = useCallback((prod_id: string) => {
    setShoppingCart((c) => {
      const cart_without_prod = c.filter(
        (cart_prod: CartProductModel) => cart_prod.prod.id !== prod_id
      );

      const old_cart_prod = c.filter(
        (cart_prod: CartProductModel) => cart_prod.prod.id === prod_id
      )[0];

      if (old_cart_prod === undefined) {
        console.log(
          `There were no products that matches the id '${prod_id}' to call 'removeOne' on.`
        );
        return c;
      }

      if (old_cart_prod._cart_amount === 1) {
        const new_cart = c.filter(
          // remove from the cart as the product._cart_amount would be 0
          (cart_prod: CartProductModel) => cart_prod.prod.id !== prod_id
        );
        return new_cart;
      }

      const new_prod = {
        ...old_cart_prod,
        _cart_amount: old_cart_prod._cart_amount - 1,
      };

      return [...cart_without_prod, new_prod];
    });
  }, []);

  const clearCart = useCallback(() => {
    setShoppingCart([]);
  }, []);

  return {addToCart, removeFromCart, removeOne, clearCart};
};

export default useShoppingCartFunctions;
```

## Usage

### Arguments

- `setShoppingCart`: A function to update the shopping cart state.

### Returns

- `addToCart`: A function to add a product to the shopping cart.
- `removeFromCart`: A function to remove a product from the shopping cart.
- `removeOne`: A function to decrease the quantity of a product in the shopping cart by one.
- `clearCart`: A function to clear all items from the shopping cart.

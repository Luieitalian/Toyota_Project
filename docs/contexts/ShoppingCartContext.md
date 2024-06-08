# `ShoppingCartContext` Documentation

## Overview

The `ShoppingCartContext` provides a context for managing shopping cart-related information within the application. It allows components to interact with the shopping cart, including adding, removing, and updating items in the cart.

## Context

### `addToCart`

- Type: `(prod: CartProductModel) => void`
- Description: A function to add a product to the shopping cart.

### `removeFromCart`

- Type: `(prod_id: string) => void`
- Description: A function to remove a product from the shopping cart by its ID.

### `removeOne`

- Type: `(prod_id: string) => void`
- Description: A function to remove one quantity of a product from the shopping cart by its ID.

### `clearCart`

- Type: `() => void`
- Description: A function to clear the entire shopping cart.

### `selectedOfferID`

- Type: `string | undefined`
- Description: The ID of the selected offer applied to the cart.

### `setSelectedOfferID`

- Type: `Dispatch<React.SetStateAction<string | undefined>>`
- Description: A function to set the selected offer ID.

### `cart`

- Type: `CartProductModel[]`
- Description: An array containing the products in the shopping cart.

### `isCash`

- Type: `boolean`
- Description: A boolean indicating whether the payment method is cash.

### `setIsCash`

- Type: `(val: boolean) => void`
- Description: A function to set the payment method to cash.

## Usage

### Importing

```javascript
import {ShoppingCartContext} from './path/to/ShoppingCartContext';
```

### Example

```javascript
import React, {useContext} from 'react';
import {Button} from 'react-native';
import {ShoppingCartContext} from './path/to/ShoppingCartContext';

const ShoppingCartActions = () => {
  const {addToCart, clearCart} = useContext(ShoppingCartContext);

  return (
    <>
      <Button
        title="Add to Cart"
        onPress={() =>
          addToCart({
            /* Product details */
          })
        }
      />
      <Button title="Clear Cart" onPress={clearCart} />
    </>
  );
};

export default ShoppingCartActions;
```

## Explanation

- The `ShoppingCartContext` allows components to interact with the shopping cart, including adding, removing, and updating items.
- Components can consume this context using the `useContext` hook to access the provided functions and state values related to the shopping cart.

# `FavoritesContext` Documentation

## Overview

The `FavoritesContext` provides a context for managing favorite products within the application. It defines the structure of the context data and the methods available to interact with the favorite products.

## Dependencies

- `react`

## Context Definition

```js
import {createContext} from 'react';
import {ProductModel} from '@/@/models/ProductModel';

interface FavoritesContextType {
  favorites: string[];
  addToFavorites: (prod_id: string) => void;
  removeFromFavorites: (prod_id: string) => void;
  isFavorite: (item: ProductModel) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);
```

## Context Methods

1. `favorites`: An array of strings representing the IDs of favorite products.

2. `addToFavorites(prod_id: string)`: A function that adds a product ID to the list of favorites.

3. `removeFromFavorites(prod_id: string)`: A function that removes a product ID from the list of favorites.

4. `isFavorite(item: ProductModel)`: A function that checks if a product is in the list of favorites.

## Usage

## Provider

The `FavoritesContextProvider` component is responsible for providing the favorites context to its children components. It manages the state of favorite products and provides methods to add, remove, and check if a product is a favorite.

## Props

### `children`

- Type: `React.ReactNode`
- Description: The child components that will have access to the favorites context.

## State and Functions

- `favorites`: An array containing the IDs of favorite products.
- `addToFavorites(prod_id: string)`: Adds a product ID to the list of favorites.
- `removeFromFavorites(prod_id: string)`: Removes a product ID from the list of favorites.
- `isFavorite(item: ProductModel)`: Checks if a product is in the list of favorites.

## Usage

### Importing

```javascript
import FavoritesContextProvider from './path/to/FavoritesContextProvider';
```

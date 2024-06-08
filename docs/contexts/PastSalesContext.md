# `PastSalesContext` Documentation

## Overview

The `PastSalesContext` is a context that provides access to past sales receipts data and the ability to update this data.

## Context Type

### `pastSalesReceipts`

- Type: `string[]`
- Description: An array containing past sales receipts.

### `setPastSalesReceipts`

- Type: `Dispatch<React.SetStateAction<string[]>>`
- Description: A function to update the `pastSalesReceipts` array.

## Usage

### Importing

```javascript
import {PastSalesContext} from './path/to/PastSalesContext';
```

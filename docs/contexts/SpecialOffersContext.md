# `Special Offers` Context

## Overview

The `SpecialOffersContext` is a React context that manages the state of special offers within the application. It provides access to information about available special offers and their loading status.

## Usage

To use the `SpecialOffersContext`, follow these steps:

1. **Import Context**: Import the `SpecialOffersContext` and its associated types into your component files.

   ```typescript
   import {createContext} from 'react';
   import {SpecialOfferModel} from '../../models/SpecialOfferModel';
   ```

2. **Access Context**: Access the special offers context within your components using the `useContext` hook.

   ```typescript
   import {useContext} from 'react';
   import {SpecialOffersContext} from '../path/to/SpecialOffersContext';
   ```

3. **Use Context Data**: Once you have access to the context, you can use the special offers and loading status in your components.

   ```typescript
   const {specialOffers, offersLoading} = useContext(SpecialOffersContext);
   ```

## Context Data

The `SpecialOffersContext` provides the following data:

- **specialOffers**: An array containing special offer models representing available offers.
- **offersLoading**: A boolean indicating whether special offers are currently loading.

## Example

Here's an example of how to use the `SpecialOffersContext` within a component:

```js
import {useContext} from 'react';
import {SpecialOffersContext} from '../path/to/SpecialOffersContext';

const SpecialOffersComponent = () => {
  const {specialOffers, offersLoading} = useContext(SpecialOffersContext);

  return (
    <div>
      {offersLoading ? (
        <p>Loading special offers...</p>
      ) : (
        <ul>
          {specialOffers.map((offer) => (
            <li key={offer.id}>{offer.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SpecialOffersComponent;
```

## Context Provider

The `SpecialOffersContext` should be wrapped by a provider component at the top level of your application. This provider component should be responsible for fetching special offers data and updating the context accordingly.

# `useIsOfferApplicable` Hook Documentation

## Overview

The `useIsOfferApplicable` hook is a custom React hook used in the HızlıPos React application to determine whether a special offer is applicable to the current shopping cart. It uses the current state of the shopping cart and pricing information to evaluate the applicability of various special offers.

## Dependencies

- `react`
- `@/models/SpecialOfferModel`
- `@/models/CartProductModel`
- `./useCartPricing`
- `@/contexts/ShoppingCartContext/ShoppingCartContext`

## Hook Definition

```js
import {useCallback, useContext} from 'react';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
import {CartProductModel} from '@/models/CartProductModel';
import useCartPricing from './useCartPricing';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';

const useIsOfferApplicable = () => {
  const {cart} = useContext(ShoppingCartContext);
  const {subTotal} = useCartPricing(cart);

  const n_discount_over_m = useCallback(
    (offer: SpecialOfferModel, num: number): boolean => {
      if (offer.applicable_products.all) {
        return subTotal >= num;
      } else {
        return cart.some((item: CartProductModel) =>
          offer.applicable_products.products?.includes(item.prod.id)
        )
          ? subTotal >= num
          : false;
      }
    },
    [cart, subTotal]
  );

  const buy_n_pay_m = useCallback(
    (offer: SpecialOfferModel, num: number): boolean => {
      if (offer.applicable_products.all) {
        return true;
      } else {
        return cart.some((item: CartProductModel) => {
          if (item._cart_amount >= num) {
            return offer.applicable_products.products?.some(
              (offer_id: string) => offer_id === item.prod.id
            );
          } else {
            return false;
          }
        });
      }
    },
    [cart, subTotal]
  );

  const isApplicable = useCallback(
    (offer: SpecialOfferModel): boolean => {
      switch (offer.name) {
        case 'buy_two_pay_one':
          return buy_n_pay_m(offer, 2);
        case 'buy_three_pay_one':
          return buy_n_pay_m(offer, 3);
        case '100_discount_over_1000':
          return n_discount_over_m(offer, 1000);
        case '100_discount_over_500':
          return n_discount_over_m(offer, 500);
        default:
          return false;
      }
    },
    [cart, subTotal]
  );

  return {isApplicable};
};

export default useIsOfferApplicable;
```

## Usage

### Arguments

This hook does not take any arguments directly. It uses context to access the shopping cart and pricing information.

### Returns

- `isApplicable`: A function that takes a `SpecialOfferModel` and returns a boolean indicating whether the offer is applicable to the current cart.

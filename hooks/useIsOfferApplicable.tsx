import {useCallback, useContext} from 'react';
import {SpecialOfferModel} from '../models/SpecialOfferModel';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import {CartProductModel} from '../models/CartProductModel';
import useCartPricing from './useCartPricing';

type useIsOfferApplicable = {
  offer: SpecialOfferModel;
};

const useIsOfferApplicable = () => {
  const {cart} = useContext(ShoppingCartContext);
  const {subTotal} = useCartPricing(cart);

  const n_discount_over_m = useCallback(
    (offer: SpecialOfferModel): boolean => {
      switch (offer.name) {
        case '100_discount_over_1000':
          if (offer.applicable_products.all) {
            return subTotal >= 1000;
          } else {
            return cart.some((item: CartProductModel) =>
              offer.applicable_products.products?.includes(item.prod.id)
            )
              ? subTotal >= 500
              : false;
          }
        case '100_discount_over_500':
          if (offer.applicable_products.all) {
            return subTotal >= 500;
          } else {
            return cart.some((item: CartProductModel) =>
              offer.applicable_products.products?.includes(item.prod.id)
            )
              ? subTotal >= 500
              : false;
          }
        default:
          return false;
      }
    },
    [cart, subTotal]
  );

  const buy_n_pay_n_1 = useCallback(
    (offer: SpecialOfferModel): boolean => {
      switch (offer.name) {
        case 'buy_two_pay_one':
          if (offer.applicable_products.all) {
            return true;
          } else {
            return cart.some((item: CartProductModel) => {
              if (item._cart_amount >= 2) {
                return offer.applicable_products.products?.some(
                  (offer_id: string) => offer_id === item.prod.id
                );
              } else {
                return false;
              }
            });
          }
        default:
          return false;
      }
    },
    [cart, subTotal]
  );

  const buy_n_pay_n_2 = useCallback(
    (offer: SpecialOfferModel): boolean => {
      switch (offer.name) {
        case 'buy_two_pay_one':
          if (offer.applicable_products.all) {
            return true;
          } else {
            return cart.some((item: CartProductModel) => {
              if (item._cart_amount >= 3) {
                return offer.applicable_products.products?.some(
                  (offer_id: string) => offer_id === item.prod.id
                );
              } else {
                return false;
              }
            });
          }
        default:
          return false;
      }
    },
    [cart, subTotal]
  );

  const isApplicable = useCallback(
    (offer: SpecialOfferModel): boolean => {
      switch (offer.type.name) {
        case 'buy_n_pay_n-1':
          return buy_n_pay_n_1(offer);
        case 'buy_n_pay_n-2':
          return buy_n_pay_n_2(offer);
        case 'n_discount_over_m':
          return n_discount_over_m(offer);
        default:
          return false;
      }
    },
    [subTotal, cart]
  );

  return {isApplicable};
};

export default useIsOfferApplicable;

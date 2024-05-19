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

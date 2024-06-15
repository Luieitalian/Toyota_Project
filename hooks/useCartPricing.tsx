import {useCallback, useContext, useMemo} from 'react';
import {CartProductModel} from '@/models/CartProductModel';
import currency from 'currency.js';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
import {SpecialOffersContext} from '@/contexts/SpecialOffersContext/SpecialOffersContext';

const useCartPricing = (cart: CartProductModel[]) => {
  const {specialOffers, selectedSpecialOffer} =
    useContext(SpecialOffersContext);

  const selected_offer = useMemo(
    () =>
      specialOffers?.find(
        (offer: SpecialOfferModel) => offer === selectedSpecialOffer
      ),
    [specialOffers, selectedSpecialOffer]
  );

  const buy_n_pay_m = useCallback(
    (selected_offer: SpecialOfferModel, num: number): number => {
      let total = 0;
      let applicableCartItems = cart;

      if (!selected_offer.applicable_products.all) {
        applicableCartItems = cart.filter((item: CartProductModel) =>
          selected_offer.applicable_products.products?.includes(item.prod.id)
        );
      }

      applicableCartItems.forEach((item: CartProductModel) => {
        const whole = item._cart_amount - Math.floor(item._cart_amount / num);
        total += currency(item.prod.price, {
          separator: '.',
          decimal: ',',
        }).multiply(whole).value;
      });

      return total;
    },
    [selected_offer, cart]
  );

  const n_discount_over_m = useCallback(
    (selected_offer: SpecialOfferModel, n: number, m: number): number => {
      return n;
    },
    [selected_offer, cart]
  );

  const discountTotal = useMemo((): number => {
    if (!selected_offer) return 0;

    switch (selected_offer.name) {
      case 'buy_two_pay_one':
        return buy_n_pay_m(selected_offer, 2);
      case 'buy_three_pay_one':
        return buy_n_pay_m(selected_offer, 3);
      case '100_discount_over_1000':
        return n_discount_over_m(selected_offer, 100, 1000);
      case '100_discount_over_500':
        return n_discount_over_m(selected_offer, 100, 500);
    }
    return 0;
  }, [selected_offer, cart]);

  const subTotalMap = useMemo(
    () =>
      cart.map(
        (cart_item: CartProductModel) =>
          currency(cart_item.prod.price, {
            separator: '.',
            decimal: ',',
          }).multiply(cart_item._cart_amount).value
      ),
    [cart]
  );

  const subTotal = useMemo(
    () => subTotalMap.reduce((acc, curr) => acc + curr, 0),
    [cart]
  );

  const paymentTotal = subTotal - discountTotal;

  return {subTotal, paymentTotal, discountTotal};
};

export default useCartPricing;

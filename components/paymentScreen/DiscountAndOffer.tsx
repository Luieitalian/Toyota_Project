import React, {memo, useContext} from 'react';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import useDiscountAndOfferStyle from './styles/useDiscountAndOfferStyle';
import {SpecialOffersContext} from '@/contexts/SpecialOffersContext/SpecialOffersContext';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import currency from 'currency.js';
import {currency_format} from '@/globals/pricing';
import {PriceContext} from '@/contexts/PriceContext/PriceContext';

export type DiscountAndOfferProps = {};

const DiscountAndOffer = ({}: DiscountAndOfferProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useDiscountAndOfferStyle(theme);

  const {selectedSpecialOffer} = useContext(SpecialOffersContext);
  const {cart} = useContext(ShoppingCartContext);
  const {discountTotal} = useContext(PriceContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {t('selected_offer', {
          offer: selectedSpecialOffer
            ? t(selectedSpecialOffer.name)
            : t('not_chosen'),
        })}
      </Text>
      <Text style={styles.text}>
        {t('discount_amount')}
        <Text>{currency(discountTotal).format(currency_format)}</Text>
      </Text>
    </View>
  );
};

export default memo(DiscountAndOffer);

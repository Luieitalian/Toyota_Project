import {TFunction} from 'i18next';
import React, {memo, useContext} from 'react';
import {View} from 'react-native';
import {IconButton, MD3Theme, Surface, Text} from 'react-native-paper';
import {SpecialOfferModel} from '../models/SpecialOfferModel';
import useSpecialOfferItemStyles from './styles/useSpecialOfferItemStyles';
import {ProductsContext} from '../contexts/ProductsContext';
import {ProductModel} from '../models/ProductModel';

type SpecialOfferItemProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  offer: SpecialOfferModel;
  onSelect: (offer: SpecialOfferModel) => void;
  selected: boolean;
};

const SpecialOfferItem = ({
  offer,
  selected,
  onSelect,
  t,
  theme,
}: SpecialOfferItemProps) => {
  const {styles} = useSpecialOfferItemStyles(theme);
  const {products} = useContext(ProductsContext);

  const onPress = () => {
    if (offer) {
      onSelect(offer);
    }
  };

  return (
    <Surface elevation={2} style={styles.itemContainer}>
      <View style={styles.group}>
        <Text>{t(offer.name)}</Text>
        <Text>
          {`${t('applicable_products')}:`}{' '}
          {offer.applicable_products.all ? (
            <Text style={styles.applicableProductsText}>{t('all')}</Text>
          ) : (
            offer.applicable_products.products?.map((id: string) => (
              <Text key={id} style={styles.applicableProductsText}>
                {products.find((val: ProductModel) => val.id === id)?.name}
                {', '}
              </Text>
            ))
          )}
        </Text>
      </View>
      <IconButton
        disabled={selected}
        size={styles.iconButtonSize.width}
        mode="contained"
        onPress={onPress}
        icon="check"
      />
    </Surface>
  );
};

export default memo(SpecialOfferItem);

import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {View} from 'react-native';
import {
  IconButton,
  MD3Theme,
  Portal,
  Snackbar,
  Surface,
  Text,
} from 'react-native-paper';
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
  applicable: boolean;
};

const SpecialOfferItem = ({
  offer,
  selected,
  applicable,
  onSelect,
  t,
  theme,
}: SpecialOfferItemProps) => {
  const {styles} = useSpecialOfferItemStyles(theme, selected, applicable);
  const {products} = useContext(ProductsContext);

  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);

  const onSnackbarDismiss = () => {
    setSnackbarVisible(false);
  };

  const onPress = () => {
    setSnackbarVisible(true);
    onSelect(offer);
    console.log('applicable?', applicable);
  };

  return (
    <Surface elevation={2} style={styles.itemContainer}>
      <View style={styles.group}>
        <Text style={styles.offerName}>{t(offer.name)}</Text>
        <Text>
          <Text style={styles.applicableProductsText}>
            {`${t('applicable_products')}: `}
          </Text>

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
        disabled={!applicable}
        size={styles.iconButtonSize.width}
        mode="contained"
        onPress={onPress}
        icon={applicable ? 'check' : 'close'}
      />
      <Portal>
        <Snackbar
          duration={5000}
          wrapperStyle={styles.snackbar}
          visible={snackbarVisible}
          onDismiss={onSnackbarDismiss}
        >
          {offer && (
            <Text style={styles.warningText}>
              {t('you_picked_offer', {offer: t(offer.name)})}
            </Text>
          )}
        </Snackbar>
      </Portal>
    </Surface>
  );
};

export default memo(SpecialOfferItem);

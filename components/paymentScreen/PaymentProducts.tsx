import React, {memo, useContext, useMemo, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {CartProductModel} from '@/models/CartProductModel';
import CartItem from '../salesScreen/CartItem';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import usePaymentProductsStyle from './styles/usePaymentProductsStyle';
import {breakPoint} from '@/globals/style';
import CustomButton from '../common/CustomButton';
import CustomModal from '../common/CustomModal';

const PaymentProducts = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {styles} = usePaymentProductsStyle(theme);
  const {cart} = useContext(ShoppingCartContext);

  const {width} = useWindowDimensions();
  const isWide = useMemo(() => width >= breakPoint, [width]);

  const renderItem = ({item}: ListRenderItemInfo<CartProductModel>) => (
    <CartItem key={item.prod.id} cart_item={item} />
  );

  const ListEmptyComponent = <Text style={styles.emptyText}>empty</Text>;

  const onPress = () => {
    setModalVisible(true);
  };
  const onDismissModal = () => {
    setModalVisible(false);
  };

  return isWide ? (
    <View style={styles.containerWide}>
      <FlatList
        keyboardShouldPersistTaps="handled"
        numColumns={1}
        data={cart}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  ) : (
    <>
      <CustomButton overridingButtonStyles={styles} onPress={onPress}>
        {t('show_products')}
      </CustomButton>
      <CustomModal
        modalVisible={modalVisible}
        onDismissModal={onDismissModal}
        overridingModalStyles={styles}
      >
        <View style={styles.containerThin}>
          <Text style={styles.headerText}>{t('products_in_cart')}</Text>
          <FlatList
            keyboardShouldPersistTaps="handled"
            numColumns={1}
            data={cart}
            renderItem={renderItem}
            ListEmptyComponent={ListEmptyComponent}
          />
        </View>
      </CustomModal>
    </>
  );
};

export default memo(PaymentProducts);

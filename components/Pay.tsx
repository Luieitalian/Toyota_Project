import React, {memo, useContext, useState} from 'react';
import usePayStyle from './styles/usePayStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import {Modal, Portal, useTheme} from 'react-native-paper';
import {ScrollView} from 'react-native';
import Receipt from './Receipt';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';

const Pay = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {styles} = usePayStyle(theme);

  const {cart} = useContext(ShoppingCartContext);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onPress = () => {
    if (cart.length !== 0) {
      showModal();
    }
  };

  return (
    <>
      <CustomButton styles={styles} onPress={onPress}>
        {t('pay')}
      </CustomButton>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <ScrollView
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Receipt />
          </ScrollView>
        </Modal>
      </Portal>
    </>
  );
};

export default memo(Pay);

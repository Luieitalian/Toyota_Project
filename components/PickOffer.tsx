import {TFunction} from 'i18next';
import React, {memo, useContext, useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {
  Button,
  Dialog,
  MD3Theme,
  Modal,
  Portal,
  Snackbar,
} from 'react-native-paper';
import usePickOfferStyle from './styles/usePickOfferStyle';
import CustomButton from './CustomButton';
import useSpecialOffers from '../hooks/useSpecialOffers';
import {SpecialOfferModel} from '../models/SpecialOfferModel';
import SpecialOfferItem from './SpecialOfferItem';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import useIsOfferApplicable from '../hooks/useIsOfferApplicable';

type PickOfferProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const PickOffer = ({t, theme}: PickOfferProps) => {
  const {styles} = usePickOfferStyle(theme);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {selectedOfferID, setSelectedOfferID} = useContext(ShoppingCartContext);
  const {cart} = useContext(ShoppingCartContext);

  const {specialOffers, offersLoading} = useSpecialOffers();
  const {isApplicable} = useIsOfferApplicable();

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onCancel = () => {
    setSelectedOfferID(undefined);
    setModalVisible(false);
  };

  const onDone = () => {
    setModalVisible(false);
  };

  const onSelect = (offer: SpecialOfferModel) => {
    console.log(`'${offer.name}' with id '${offer.id}' is selected!`);
    setSelectedOfferID(offer.id);
  };

  const onPress = () => {
    showModal();
    console.log('pick_offer');
  };

  useEffect(() => {
    setSelectedOfferID(undefined);
  }, [cart]);

  return (
    <>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <Text style={styles.title}>{t('special_offers')}</Text>
          {offersLoading ? (
            <Text>{t('special_offers_loading')}</Text>
          ) : (
            <ScrollView contentContainerStyle={styles.offersContainer}>
              {specialOffers?.map((offer: SpecialOfferModel) => (
                <SpecialOfferItem
                  selected={selectedOfferID === offer.id && true}
                  applicable={isApplicable(offer)}
                  onSelect={onSelect}
                  offer={offer}
                  key={offer.id}
                  t={t}
                  theme={theme}
                />
              ))}
            </ScrollView>
          )}
          <View style={styles.buttonGroup}>
            <Button
              onPress={onCancel}
              mode="elevated"
              style={styles.cancelButton}
              labelStyle={styles.cancelText}
            >
              {t('cancel')}
            </Button>
            <Button
              onPress={onDone}
              mode="elevated"
              style={styles.doneButton}
              labelStyle={styles.doneText}
            >
              {t('done')}
            </Button>
          </View>
        </Modal>
      </Portal>

      <CustomButton onPress={onPress} styles={styles} theme={theme}>
        {t('pick_offer')}
      </CustomButton>
    </>
  );
};

export default memo(PickOffer);

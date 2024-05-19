import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
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

  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [selectedOffer, setSelectedOffer] = useState<string | undefined>(
    undefined
  );

  const {specialOffers, offersLoading} = useSpecialOffers();
  const {isApplicable} = useIsOfferApplicable();

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onCancel = () => {
    setSelectedOffer(undefined);
    setModalVisible(false);
    setSnackbarVisible(false);
  };

  const onDone = () => {
    setModalVisible(false);
  };

  const onSelect = (offer: SpecialOfferModel) => {
    console.log(`'${offer.name}' with id '${offer.id}' is selected!`);
    setSelectedOffer(offer.name);
    setSnackbarVisible(true);
  };

  const onDialogDismiss = () => {
    setSnackbarVisible(false);
  };

  const closeDialog = () => {
    setSnackbarVisible(false);
  };

  const onPress = () => {
    showModal();
    console.log('pick_offer');
  };

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
                  selected={selectedOffer === offer.name && true}
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

      <Portal>
        <Snackbar
          duration={5000}
          wrapperStyle={styles.snackbar}
          icon="alert"
          onIconPress={() => {}}
          visible={snackbarVisible}
          onDismiss={onDialogDismiss}
        >
          {selectedOffer && (
            <Text style={styles.warningText}>
              {t('you_picked_offer', {offer: t(selectedOffer!)})}
            </Text>
          )}
        </Snackbar>
      </Portal>

      <CustomButton onPress={onPress} styles={styles} theme={theme}>
        {t('pick_offer')}
      </CustomButton>
    </>
  );
};

export default memo(PickOffer);

import {TFunction} from 'i18next';
import React, {memo, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {Button, Dialog, MD3Theme, Modal, Portal} from 'react-native-paper';
import usePickOfferStyle from './styles/usePickOfferStyle';
import CustomButton from './CustomButton';
import useSpecialOffers from '../hooks/useSpecialOffers';
import {SpecialOfferModel} from '../models/SpecialOfferModel';
import SpecialOfferItem from './SpecialOfferItem';

type PickOfferProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const PickOffer = ({t, theme}: PickOfferProps) => {
  const {styles} = usePickOfferStyle(theme);
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [selectedOffer, setSelectedOffer] = useState<string | undefined>(
    undefined
  );
  const {specialOffers, offersLoading} = useSpecialOffers();

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onSelect = (offer: SpecialOfferModel) => {
    console.log(`${offer.name} is selected!`);
    setSelectedOffer(offer.name);
    setDialogVisible(true);
  };

  const onDialogDismiss = () => {
    setDialogVisible(false);
  };
  const closeDialog = () => {
    setDialogVisible(false);
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
          {offersLoading ? (
            <Text>{t('special_offers_loading')}</Text>
          ) : (
            <ScrollView contentContainerStyle={styles.offersContainer}>
              {specialOffers?.map((offer: SpecialOfferModel) => (
                <SpecialOfferItem
                  selected={selectedOffer === offer.name && true}
                  onSelect={onSelect}
                  offer={offer}
                  key={offer.id}
                  t={t}
                  theme={theme}
                />
              ))}
            </ScrollView>
          )}
        </Modal>
      </Portal>

      <Portal>
        <Dialog visible={dialogVisible} onDismiss={onDialogDismiss}>
          <Dialog.Title>{t('warning')}</Dialog.Title>
          <Dialog.Content>
            {selectedOffer && (
              <Text style={styles.warningText}>
                {t('you_picked_offer', {offer: t(selectedOffer!)})}
              </Text>
            )}
          </Dialog.Content>
          <Dialog.Actions>
            <Button labelStyle={styles.doneText} onPress={closeDialog}>
              {t('done')}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <CustomButton onPress={onPress} styles={styles} theme={theme}>
        {t('pick_offer')}
      </CustomButton>
    </>
  );
};

export default memo(PickOffer);

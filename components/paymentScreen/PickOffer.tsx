import React, {memo, useContext, useEffect, useState} from 'react';
import {useTheme} from 'react-native-paper';
import usePickOfferStyle from './styles/usePickOfferStyle';
import CustomButton from '../common/CustomButton';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import {SpecialOffersContext} from '@/contexts/SpecialOffersContext/SpecialOffersContext';
import CustomModal from '../common/CustomModal';
import SpecialOffers from '../common/SpecialOffers';

const PickOffer = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = usePickOfferStyle(theme);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {cart} = useContext(ShoppingCartContext);
  const {setSelectedSpecialOffer} = useContext(SpecialOffersContext);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onCancel = () => {
    setSelectedSpecialOffer(undefined);
    setModalVisible(false);
  };

  const onDone = () => {
    setModalVisible(false);
  };

  const onSelect = (offer: SpecialOfferModel) => {
    console.log(`'${offer.name}' with id '${offer.id}' is selected!`);
    setSelectedSpecialOffer(offer);
  };

  const onPress = () => {
    showModal();
    console.log('Pick offer');
  };

  useEffect(() => {
    setSelectedSpecialOffer(undefined);
  }, [cart]);

  return (
    <>
      <CustomModal
        modalVisible={modalVisible}
        onDismissModal={hideModal}
        overridingModalStyles={styles}
      >
        <SpecialOffers
          onCancel={onCancel}
          onDone={onDone}
          onSelect={onSelect}
        />
      </CustomModal>

      <CustomButton onPress={onPress} overridingButtonStyles={styles}>
        {t('pick_offer')}
      </CustomButton>
    </>
  );
};

export default memo(PickOffer);

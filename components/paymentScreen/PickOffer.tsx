import React, {memo, useContext, useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import usePickOfferStyle from './styles/usePickOfferStyle';
import CustomButton from '../common/CustomButton';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
import SpecialOfferItem from './SpecialOfferItem';
import useIsOfferApplicable from '@/hooks/useIsOfferApplicable';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import {SpecialOffersContext} from '@/contexts/SpecialOffersContext/SpecialOffersContext';
import CancelDoneButtonGroup from '../common/CancelDoneButtonGroup';
import CustomModal from '../common/CustomModal';

const PickOffer = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = usePickOfferStyle(theme);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {cart} = useContext(ShoppingCartContext);
  const {
    specialOffers,
    offersLoading,
    selectedSpecialOffer,
    setSelectedSpecialOffer,
  } = useContext(SpecialOffersContext);

  const {isApplicable} = useIsOfferApplicable();

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
        <Text style={styles.title}>{t('special_offers')}</Text>
        {offersLoading ? (
          <Text>{t('special_offers_loading')}</Text>
        ) : (
          <ScrollView contentContainerStyle={styles.offersContainer}>
            {specialOffers?.map((offer: SpecialOfferModel) => (
              <SpecialOfferItem
                selected={selectedSpecialOffer === offer && true}
                applicable={isApplicable(offer)}
                onSelect={onSelect}
                offer={offer}
                key={offer.id}
              />
            ))}
          </ScrollView>
        )}
        <CancelDoneButtonGroup onCancel={onCancel} onDone={onDone} />
      </CustomModal>

      <CustomButton onPress={onPress} overridingButtonStyles={styles}>
        {t('pick_offer')}
      </CustomButton>
    </>
  );
};

export default memo(PickOffer);

import React, {memo, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import {ScrollView, Text} from 'react-native';
import CancelDoneButtonGroup from './CancelDoneButtonGroup';
import SpecialOfferItem from '../paymentScreen/SpecialOfferItem';
import {SpecialOffersContext} from '@/contexts/SpecialOffersContext/SpecialOffersContext';
import useIsOfferApplicable from '@/hooks/useIsOfferApplicable';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
import useSpecialOffersStyle from './styles/useSpecialOffersStyle';

export type SpecialOffersProps = {
  onCancel?: (x: any) => any;
  onDone?: (x: any) => any;
  onSelect?: (x: any) => any;
};

const SpecialOffers = ({onCancel, onSelect, onDone}: SpecialOffersProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useSpecialOffersStyle(theme);

  const {specialOffers, selectedSpecialOffer, offersLoading} =
    useContext(SpecialOffersContext);
  const {isApplicable} = useIsOfferApplicable();

  return (
    <>
      <Text style={styles.title}>{t('special_offers')}</Text>
      {offersLoading ? (
        <Text>{t('special_offers_loading')}</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.offersContainer}>
          {specialOffers?.map((offer: SpecialOfferModel) => (
            <SpecialOfferItem
              selected={selectedSpecialOffer === offer && true}
              applicable={isApplicable(offer)}
              onSelect={onSelect ? onSelect : () => {}}
              offer={offer}
              key={offer.id}
            />
          ))}
        </ScrollView>
      )}
      <CancelDoneButtonGroup
        onCancel={onCancel ? onCancel : () => {}}
        onDone={onDone ? onDone : () => {}}
      />
    </>
  );
};

export default memo(SpecialOffers);

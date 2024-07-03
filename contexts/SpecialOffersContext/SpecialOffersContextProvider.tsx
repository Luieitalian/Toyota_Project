import React, {memo, useMemo, useState} from 'react';
import {SpecialOffersContext} from './SpecialOffersContext';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
import getSpecialOffers from '@/utils/getSpecialOffers';

export type SpecialOffersContextProviderProps = {
  children: React.ReactNode;
};

const SpecialOffersContextProvider = ({
  children,
}: SpecialOffersContextProviderProps) => {
  const {specialOffers, offersLoading} = getSpecialOffers();
  const [selectedSpecialOffer, setSelectedSpecialOffer] = useState<
    SpecialOfferModel | undefined
  >(undefined);

  const specialOffersContext = useMemo(
    () => ({
      specialOffers: specialOffers,
      offersLoading: offersLoading,
      selectedSpecialOffer: selectedSpecialOffer,
      setSelectedSpecialOffer: setSelectedSpecialOffer,
    }),
    [
      specialOffers,
      offersLoading,
      setSelectedSpecialOffer,
      selectedSpecialOffer,
    ]
  );

  if (!specialOffersContext) {
    return <>{children}</>;
  }

  return (
    <SpecialOffersContext.Provider value={specialOffersContext}>
      {children}
    </SpecialOffersContext.Provider>
  );
};

export default memo(SpecialOffersContextProvider);

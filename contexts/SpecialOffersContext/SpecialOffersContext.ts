import {createContext, Dispatch} from 'react';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';

interface SpecialOffersContextType {
  specialOffers: SpecialOfferModel[] | undefined;
  selectedSpecialOffer: SpecialOfferModel | undefined;
  setSelectedSpecialOffer: Dispatch<
    React.SetStateAction<SpecialOfferModel | undefined>
  >;
  offersLoading: boolean;
}

export const SpecialOffersContext = createContext<SpecialOffersContextType>(
  {} as SpecialOffersContextType
);

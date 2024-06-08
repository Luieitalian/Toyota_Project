import {createContext, Dispatch} from 'react';
import {SpecialOfferModel} from '../../models/SpecialOfferModel';

interface SpecialOffersContextType {
  specialOffers: SpecialOfferModel[];
  offersLoading: boolean;
}

export const SpecialOffersContext = createContext<SpecialOffersContextType>(
  {} as SpecialOffersContextType
);

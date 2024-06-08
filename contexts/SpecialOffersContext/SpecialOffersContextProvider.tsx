import React, {memo, useMemo} from 'react';
import {SpecialOffersContext} from './SpecialOffersContext';
import useSpecialOffers from '../../hooks/useSpecialOffers';

type SpecialOffersContextProviderProps = {
  children: React.ReactNode;
};

const SpecialOffersContextProvider = ({
  children,
}: SpecialOffersContextProviderProps) => {
  const {specialOffers, offersLoading} = useSpecialOffers();

  const specialOffersContext = useMemo(
    () => ({
      specialOffers: specialOffers!,
      offersLoading: offersLoading,
    }),
    [specialOffers, offersLoading]
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

import React, {memo, useMemo} from 'react';
import {ServiceContext} from './ServiceContext';
import useServiceInfo from '../../hooks/useServiceInfo';

type ServiceContextProviderProps = {
  children: React.ReactNode;
};

const ServiceContextProvider = ({children}: ServiceContextProviderProps) => {
  const {serviceInfo, serviceLoading} = useServiceInfo();

  const serviceContext = useMemo(
    () => ({
      service: {version: serviceInfo?.version!},
    }),
    [serviceInfo, serviceLoading]
  );

  if (!serviceContext) return <>{children}</>;

  return (
    <ServiceContext.Provider value={serviceContext}>
      {children}
    </ServiceContext.Provider>
  );
};

export default memo(ServiceContextProvider);

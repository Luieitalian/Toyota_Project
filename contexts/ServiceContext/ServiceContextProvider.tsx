import React, {memo, useMemo} from 'react';
import {ServiceContext} from './ServiceContext';
import getServiceInfo from '@/utils/getServiceInfo';

type ServiceContextProviderProps = {
  children: React.ReactNode;
};

const ServiceContextProvider = ({children}: ServiceContextProviderProps) => {
  const {serviceInfo, serviceLoading} = getServiceInfo();

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

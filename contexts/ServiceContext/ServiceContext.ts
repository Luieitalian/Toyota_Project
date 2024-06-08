import {createContext} from 'react';

interface ServiceContextType {
  service: {
    version: string;
  };
}

export const ServiceContext = createContext<ServiceContextType>(
  {} as ServiceContextType
);

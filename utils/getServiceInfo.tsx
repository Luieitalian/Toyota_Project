import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {ServiceInfoModel} from '@/models/ServiceInfoModel';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';
import {HOST_LOOPBACK_INTERFACE} from '@env';

const getServiceInfo = () => {
  const [serviceInfo, setServiceInfo] = useState<ServiceInfoModel>();
  const [serviceLoading, setServiceLoading] = useState<boolean>(true);

  const {isOnline} = useContext(StatusContext);

  const getSetServiceInfoFromServer = async () => {
    console.log('Trying to get service info from server!');
    axios
      .get(`http://${HOST_LOOPBACK_INTERFACE}/service`)
      .then((res) => {
        console.log('Getting service info from server!');

        const data = res.data;

        setServiceInfo(data);
        setServiceLoading(false);
      })
      .catch((e) => {
        console.log("Can't get service info from server (Server may be down)");
      });
  };

  const getSetServiceInfoFromLocalDB = async () => {
    console.log('Trying to get service info from local database!');

    try {
      const local_db_string = await AsyncStorage.getItem('database'); // if users exist in local storage then simply get them
      console.log('Getting service info from local database!');

      const local_db = JSON.parse(local_db_string as string);
      const service = local_db.service;

      setServiceInfo(service);
      setServiceLoading(false);
    } catch (error) {
      console.log(`Can't get service info from local database!`, error);
    }
  };

  useEffect(() => {
    if (isOnline) {
      getSetServiceInfoFromServer();
    } else {
      getSetServiceInfoFromLocalDB();
    }
  }, [isOnline]);

  return {serviceInfo, serviceLoading};
};

export default getServiceInfo;

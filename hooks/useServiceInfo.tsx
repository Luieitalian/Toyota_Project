import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {ServiceInfoModel} from '../models/ServiceInfoModel';

const useServiceInfo = (isOnline: boolean) => {
  const [serviceInfo, setServiceInfo] = useState<ServiceInfoModel>();
  const [serviceLoading, setServiceLoading] = useState<boolean>(true);

  const getSetServiceInfoFromServer = async () => {
    axios
      .get('http://10.0.2.2:3000/service') // 10.0.2.2 Special alias to the host loopback interface
      .then((res) => {
        console.log('Getting service info!');
        const data = res.data;
        setServiceInfo(data);
        setServiceLoading(false);
      })
      .catch((e) => {
        console.log("Can't get service info (Server may be down!)");
      });
  };

  const getSetServiceInfoFromLocalDB = async () => {
    const local_db_string = await AsyncStorage.getItem('database');
    const local_db = JSON.parse(local_db_string as string);
    const service = local_db.service;
    setServiceInfo(service);
    setServiceLoading(false);
  };

  useEffect(() => {
    if (isOnline) {
      getSetServiceInfoFromServer();
    } else {
      getSetServiceInfoFromLocalDB();
    }
  }, []);

  return {serviceInfo, serviceLoading};
};

export default useServiceInfo;

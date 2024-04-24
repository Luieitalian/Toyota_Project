import axios from 'axios';
import {useEffect, useState} from 'react';

const useServiceInfo = () => {
  const [serviceInfo, setServiceInfo] = useState<string>('[]');
  const [serviceLoading, setServiceLoading] = useState<boolean>(true);

  useEffect(() => {
    const getServiceInfo = async () => {
      axios
        .get('http://10.0.2.2:3000/service') // 10.0.2.2 Special alias to the host loopback interface
        .then((res) => {
          console.log('Getting service info!');
          const data = res.data;
          setServiceInfo(JSON.stringify(data));
          setServiceLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getServiceInfo();
  }, []);

  return {serviceInfo, serviceLoading};
};

export default useServiceInfo;

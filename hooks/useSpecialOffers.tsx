import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';

const useSpecialOffers = () => {
  const [specialOffers, setSpecialOffers] = useState<SpecialOfferModel[]>();
  const [offersLoading, setOffersLoading] = useState<boolean>(true);

  const {isOnline} = useContext(StatusContext);

  const getSetSpecialOffersFromServer = async () => {
    console.log('Trying to get special offers from server!');
    axios
      .get('http://10.0.2.2:3000/special_offers') // 10.0.2.2 Special alias to the host loopback interface
      .then((res) => {
        console.log('Getting special offers from server!');
        const data = res.data;
        setSpecialOffers(data);
        setOffersLoading(false);
      })
      .catch((e) => {
        console.log("Can't get special offers (Server may be down!)");
      });
  };

  const getSetSpecialOffersFromLocalDB = async () => {
    console.log('Trying to get special offers from local database!');
    await AsyncStorage.getItem('database')
      .then((local_db_string) => {
        const local_db = JSON.parse(local_db_string as string);
        const special_offers = local_db.special_offers;
        setSpecialOffers(special_offers);
        setOffersLoading(false);
      })
      .catch((e) => {
        console.log(`Can't get special offers from local database!`, e);
      });
  };

  useEffect(() => {
    if (isOnline) {
      getSetSpecialOffersFromServer();
    } else {
      getSetSpecialOffersFromLocalDB();
    }
  }, [isOnline]);

  return {specialOffers, offersLoading};
};

export default useSpecialOffers;

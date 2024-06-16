import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';
import {HOST_LOOPBACK_INTERFACE} from '@env';

const getSpecialOffers = () => {
  const [specialOffers, setSpecialOffers] = useState<SpecialOfferModel[]>();
  const [offersLoading, setOffersLoading] = useState<boolean>(true);

  const {isOnline} = useContext(StatusContext);

  const getSetSpecialOffersFromServer = async () => {
    console.log('Trying to get special offers from server!');
    axios
      .get(`http://${HOST_LOOPBACK_INTERFACE}/specialoffers`)
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

    try {
      const local_db_string = await AsyncStorage.getItem('database'); // if users exist in local storage then simply get them
      console.log('Getting special offers from local database!');

      const local_db = JSON.parse(local_db_string as string);
      const special_offers = local_db.special_offers;

      setSpecialOffers(special_offers);
      setOffersLoading(false);
    } catch (error) {
      console.log(`Can't get special offers from local database!`, error);
    }
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

export default getSpecialOffers;

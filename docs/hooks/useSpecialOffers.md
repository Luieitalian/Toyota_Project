# `useSpecialOffers` Hook Documentation

## Overview

The `useSpecialOffers` hook is a custom React hook used in the HızlıPos React Native application to fetch and manage special offers data. It retrieves special offers either from a server or from local storage based on the online status of the application.

## Dependencies

- `axios`
- `react`
- `@react-native-async-storage/async-storage`
- `@/models/SpecialOfferModel`
- `@/contexts/StatusContext/StatusContext`

## Hook Definition

```js
import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
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
```

## Usage

### Returns

- `specialOffers`: An array of `SpecialOfferModel` objects containing the fetched special offers data.
- `offersLoading`: A boolean indicating whether the special offers data is still being loaded.

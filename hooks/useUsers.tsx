import React, {useContext, useEffect, useState} from 'react';
import {StatusContext} from '../contexts/StatusContext/StatusContext';
import axios from 'axios';
import {UserModel} from '../models/UserModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUsers = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(true);

  const {isOnline} = useContext(StatusContext);

  const getUsersFromServer = async () => {
    console.log('Trying to get users from server!');
    axios
      .get('http://10.0.2.2:3000/users') // 10.0.2.2 Special alias to the host loopback interface
      .then((res) => {
        console.log('Getting users from server!');
        const users = res.data as UserModel[];

        setUsers(users);
        setLoadingUsers(false);
      })
      .catch((e) => {
        console.log("Can't get users (Server may be down!)");
      });
  };

  const getUsersFromLocalDB = async () => {
    console.log('Trying to get users from local database!');
    try {
      const local_db_string = await AsyncStorage.getItem('database'); // if users exist in local storage then simply get them
      console.log('Getting users from local database!');
      const users = JSON.parse(local_db_string as string).users as UserModel[];

      setUsers(users);
      setLoadingUsers(false);
    } catch (error) {
      console.log(
        'Local database is empty (Forgot to call setDatabase?)',
        error
      );
    }
  };

  useEffect(() => {
    if (isOnline) {
      getUsersFromServer();
    } else {
      getUsersFromLocalDB();
    }
  }, [isOnline]);

  return {users, loadingUsers};
};

export default useUsers;

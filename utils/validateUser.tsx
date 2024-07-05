import {UserModel} from '@/models/UserModel';

import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();
let _publicKey: string;

rnBiometrics.isSensorAvailable().then((resultObject) => {
  const {available} = resultObject;

  if (available) {
    rnBiometrics.createKeys().then((resultObject) => {
      const {publicKey} = resultObject;
      console.log(publicKey);
      _publicKey = publicKey;
    });
    rnBiometrics
      .createSignature({
        promptMessage: 'Sign in',
        payload: _publicKey,
      })
      .then((resultObject) => {
        const {success, signature} = resultObject;

        if (success) {
          console.log(signature);
        }
      });
  }
});

const validateUser = (
  username: string,
  password: string,
  users: UserModel[]
) => {
  let user: UserModel;

  user = users.filter((_user: UserModel) => {
    if (_user.name === username) {
      if (_user.password === password) {
        return true;
      }
    }
  })[0];

  return {user};
};

export default validateUser;

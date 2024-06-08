import {UserModel} from '../models/UserModel';

const validateUser = (
  username: string,
  password: string,
  users: UserModel[]
) => {
  let user = undefined;

  users.every((_user: UserModel) => {
    if (_user.name === username) {
      if (_user.password === password) {
        user = _user.name;
        return false; // to break from loop
      }
    }
  });

  return {user};
};

export default validateUser;

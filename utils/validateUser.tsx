import {UserModel} from '@/models/UserModel';

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

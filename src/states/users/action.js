
import api from '../../utils/api';

export const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
  ERROR_RECEIVE_USERS: 'ERROR_RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password, confirmpassword }) {
  return async () => {

    try {
      await api.register({ name, email, password, confirmpassword });
    } catch (error) {
      alert(error.message);
    }

  };
}

export { receiveUsersActionCreator, asyncRegisterUser };
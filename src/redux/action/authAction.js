import {act} from 'react-test-renderer';
import * as actionTypes from '../actionTypes';

export const login = (token, user_id, fullname, email, level) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      token: token,
      user_id: user_id,
      fullname: fullname,
      email: email,
      level: level
    },
  };
};

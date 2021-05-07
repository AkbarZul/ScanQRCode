import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  isLogin: false,
  token: null,
  user_id: null,
  email: '',
  fullname: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
        user_id: action.payload.user_id,
        fullname: action.payload.fullname,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default authReducer;

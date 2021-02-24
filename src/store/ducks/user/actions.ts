import {IUserState, USER_REDUCER_TYPES} from './types';

export function signInRequest(email: string, password: string) {
  return {
    type: USER_REDUCER_TYPES.USER_SIGN_IN_REQUEST,
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(user: IUserState) {
  return {
    type: USER_REDUCER_TYPES.USER_SIGN_IN_SUCCESS,
    payload: {
      ...user,
    },
  };
}

export function signInFailure(message: string) {
  return {
    type: USER_REDUCER_TYPES.USER_SIGN_IN_FAILURE,
    payload: {
      message,
    },
  };
}

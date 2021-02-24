import {Reducer} from 'redux';
import showErrorMessage from '../../../utils/showErrorMessage';
import {IUserState, USER_REDUCER_TYPES} from './types';

const INITIAL_STATE: IUserState = {
  avatar: '',
  email: '',
  id: null,
  name: '',
};

const user: Reducer<any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REDUCER_TYPES.USER_SIGN_IN_SUCCESS: {
      return {
        email: action.payload.email,
        name: action.payload.name,
        id: action.payload.name,
        avatar: action.payload.avatar,
      };
    }

    case USER_REDUCER_TYPES.USER_SIGN_IN_FAILURE: {
      return showErrorMessage(action.payload);
    }

    default: {
      return state;
    }
  }
};

export default user;

export interface IUserState {
  email: string;
  name: string;
  id: number | null;
  avatar: string;
}

export enum USER_REDUCER_TYPES {
  USER_SIGN_IN_SUCCESS = 'USER_SIGN_IN_SUCCESS',
  USER_SIGN_IN_REQUEST = 'USER_SIGN_IN_REQUEST',
  USER_SIGN_IN_FAILURE = 'USER_SIGN_IN_FAILURE',
}

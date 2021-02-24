import {AxiosResponse} from 'axios';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {signInFailure, signInRequest, signInSuccess} from './actions';
import {IUserState, USER_REDUCER_TYPES} from './types';

type AuthUserRequest = ReturnType<typeof signInRequest>;

function* authUser({payload}: AuthUserRequest) {
  console.log('chamou a api', payload);

  if (
    payload.email.toLowerCase() !== 'johndoe@gmail.com' ||
    payload.password !== '123123'
  ) {
    yield put(signInFailure('Senha ou e-mail invalídos'));
  }

  const {data}: AxiosResponse<IUserState> = yield call(
    api.post,
    '98bd6150-0741-447b-8791-498f69233d35',
    {email: payload.email, password: payload.password},
  );

  if (data) {
    yield put(signInSuccess(data));
  }
}

export default all([
  takeLatest(USER_REDUCER_TYPES.USER_SIGN_IN_REQUEST, authUser),
]);

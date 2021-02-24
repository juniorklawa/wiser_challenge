import {applyMiddleware, createStore} from 'redux';
import rootReducer from './ducks/rootReducer';
import {IUserState} from './ducks/user/types';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './ducks/rootSaga';

export interface IState {
  user: IUserState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;

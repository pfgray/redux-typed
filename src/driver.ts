import { createStore, Action } from 'redux';
import { typeName, isType } from './helpers.ts';

interface User {
  first: string;
  last: string;
}

interface MyAppState {
  appLoading: boolean;
  users?: User[],
  login: LoginState
}

interface LoginState {
  form: {
    username: string;
    password: string;
  };
  checkingAuth: boolean;
}


@typeName("FetchUsersAction")
class FetchUsersAction extends Action {}

@typeName("ReceiveUsersAction")
class ReceiveUsersAction extends Action {
  users: User[]
}

const loginReducer = (state: LoginState, action: Action): LoginState => {
  return state;
}

const rootReducer = (state: MyAppState, action: Action): MyAppState => {
  if(isType(action, FetchUsersAction)){
    return Object.assign({}, state, {
      appLoading: true
    });
  } else if(isType(action, ReceiveUsersAction)){
    action.users;
    Object.assign({}, state, {
      appLoading: false,
      users: action.users
    });
  }
  return state;
}

const initialState: MyAppState = {
  appLoading: false,
  login: {
    form: {
      username: '',
      password: ''
    },
    checkingAuth: false
  }
};

const store = createStore(rootReducer, initialState);

store.subscribe(thing => {
  console.log('got thing:', thing);
});

store.dispatch(new FetchUsersAction());

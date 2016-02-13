'use strict';

import {createStore, Action} from 'redux';

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

interface ActionClass<T extends Action> {
  prototype: T;
}

function typeName(name: string) {
  return function<T extends Action>(actionClass: ActionClass<T>) {
    actionClass.prototype.type = name;
  }
}

function isType<T extends Action>(action: Action, actionClass: ActionClass<T>): action is T {
  return action.type == actionClass.prototype.type;
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

console.log(store.getState());
store.dispatch({} as FetchUsersAction);
console.log(store.getState());

//store.dispatch(new FetchUsersAction());

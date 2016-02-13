import * as redux from 'redux';

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

//Action Type which denotes an ajax call being kicked off
class FetchUsersAction {
  thing: boolean;
}

//Action Type which denotes the user ajax call being returned
class ReceiveUsersAction {
  users: User[]
}

const loginReducer = (state: LoginState, action: )

const rootReducer = (state: MyAppState, action: Action): MyAppState => {
  if(action instanceof FetchUsersAction){
    return Object.assign({}, state, {
      loading: true,
      hmm:true
    });
  } else if(action instanceof ReceiveUsersAction){
    Object.assign({}, state, {
      loading: true,
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

const store = redux.createStore(rootReducer, initialState);

console.log(store.getState());
store.dispatch(new FetchUsersAction());
console.log(store.getState());

store.dispatch(new FetchUsersAction());

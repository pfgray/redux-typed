var redux = require('redux');
//Action Type which denotes an ajax call being kicked off
class FetchUsersAction {
}
//Action Type which denotes the user ajax call being returned
class ReceiveUsersAction {
}
const rootReducer = (state, action) => {
    if (action instanceof FetchUsersAction) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action instanceof ReceiveUsersAction) {
        Object.assign({}, state, {
            loading: true,
            users: action.users
        });
    }
    return state;
};
const initialState = {
    appLoading: false
};
const store = redux.createStore(rootReducer, initialState);
console.log(store.getState());
store.dispatch(new FetchUsersAction());
console.log(store.getState());
//redux.dispatch(new FetchUsersAction())

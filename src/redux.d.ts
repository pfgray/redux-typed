// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a820bbdead70913f0c750802b367ed54cb99b442/redux/redux.d.ts
// Type definitions for Redux v1.0.0
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Redux {

    abstract class Action {
      type: string
    }

    interface ActionCreator extends Function {
        (...args: any[]): any;
    }

    interface Reducer<State, T extends Action> extends Function {
        (state: State, action: T): State;
    }

    interface Dispatch<T extends Action> extends Function {
        (action: T): any;
    }

    interface StoreMethods<State, T extends Action> {
        dispatch: Dispatch<T>;
        getState(): State;
    }


    interface MiddlewareArg {
        dispatch: Dispatch<any>;
        getState: Function;
    }

    interface Middleware extends Function {
        (obj: MiddlewareArg): Function;
    }

    class Store<State> {
        getReducer(): Reducer<State, Action>;
        replaceReducer(nextReducer: Reducer<State, Action>): void;
        //todo: what does 'dispatch' return?
        dispatch(action: Action): State;
        getState(): any;
        subscribe(listener: Function): Function;
    }

    function createStore<State, T extends Action>(
      reducer: Reducer<State, T>,
      initialState?: State,
      enhancer?: ()=>any
    ): Store<State>;

    //todo: hmmm
    //function bindActionCreators<T>(actionCreators: T, dispatch: Dispatch): T;


    //todo: take a Map<string -> Reducer>, does this method even make sense to make typesafe??
    //function combineReducers(reducers: any): Reducer<any, any>;

    function applyMiddleware(...middlewares: Middleware[]): Function;
    function compose<T extends Function>(...functions: Function[]): T;
}

declare module "redux" {
    export = Redux;
}

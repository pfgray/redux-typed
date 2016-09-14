import { Action, Dispatch } from 'redux';

type MapStateToProps<State, Props> = (state: State) => Props;

type MapDispatchToProps<Props> = (dispatch: Dispatch<any>) => Props;

type ReactFunctionalComponent<Props> = (p:Props) => any; //todo: must return jsx, but how?

// type Connect<RootState, StateProps, DispatchProps> = (
//     stateMapper: MapStateToProps<RootState, StateProps>,
//     dispatchMapper: MapDispatchToProps<DispatchProps>
// ) => ReactFunctionalComponent<StateProps & DispatchProps>;

export function connector<RootState, StateProps, DispatchProps>(
    stateMapper: MapStateToProps<RootState, StateProps>,
    dispatchMapper: MapDispatchToProps<DispatchProps>
): (thing: StateProps & DispatchProps) => any {
  throw "lol"
}

export function connector2<RootState, StateProps, DispatchProps>(
    stateMapper: MapStateToProps<RootState, StateProps>,
    dispatchMapper: MapDispatchToProps<DispatchProps>,
    functionalComponent: (props: StateProps & DispatchProps) => any
): void {
  throw "lol"
}
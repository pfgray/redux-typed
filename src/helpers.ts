import { ActionClass, Action } from 'redux';

export abstract class ActionImpl implements Action {
  type: string
}

export function typeName(name: string) {
  return function<T extends Action>(actionClass: ActionClass<T>) {
    actionClass.prototype.type = name;
  }
}

export function isType<T extends Action>(action: Action, actionClass: ActionClass<T>): action is T {
  return action.type == actionClass.prototype.type;
}

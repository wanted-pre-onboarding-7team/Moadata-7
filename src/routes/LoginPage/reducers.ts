import { idRegExp, pwRegExp } from './utils'

export interface IInput {
  value: string
  isValid: boolean
  warning: boolean
  displayMessage: boolean
}

export interface IState {
  id: IInput
  pw: IInput
}

export interface IAction {
  type: string
  value: string
  warning: boolean
  displayMessage: boolean
}

export const inputReducer = (state: IState, action: IAction) => {
  if (action.type === 'set_id') {
    return {
      ...state,
      id: {
        ...state.id,
        value: action.value,
        isValid: idRegExp.test(action.value),
        warning: action.warning,
        displayMessage: action.displayMessage,
      },
    }
  }

  if (action.type === 'set_pw') {
    return {
      ...state,
      pw: {
        ...state.id,
        value: action.value,
        isValid: pwRegExp.test(action.value),
        warning: action.warning,
        displayMessage: action.displayMessage,
      },
    }
  }

  return state
}

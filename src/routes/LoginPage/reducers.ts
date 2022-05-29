import { idRegExp, pwRegExp } from './utils'

type ActionType =
  | 'set_id_value'
  | 'set_pw_value'
  | 'set_id_warning'
  | 'set_pw_warning'
  | 'set_id_error'
  | 'set_pw_error'

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
  type: ActionType
  value?: string
  warning?: boolean
  displayMessage?: boolean
}

export const inputReducer = (state: IState, action: IAction) => {
  if (action.type === 'set_id_value' && action.value !== undefined) {
    return {
      ...state,
      id: {
        ...state.id,
        value: action.value,
        isValid: idRegExp.test(action.value),
      },
    }
  }

  if (action.type === 'set_pw_value' && action.value !== undefined) {
    return {
      ...state,
      pw: {
        ...state.pw,
        value: action.value,
        isValid: pwRegExp.test(action.value),
      },
    }
  }

  if (action.type === 'set_id_warning' && action.warning !== undefined) {
    return {
      ...state,
      id: {
        ...state.id,
        warning: action.warning,
      },
    }
  }

  if (action.type === 'set_pw_warning' && action.warning !== undefined) {
    return {
      ...state,
      pw: {
        ...state.pw,
        warning: action.warning,
      },
    }
  }

  if (action.type === 'set_id_error' && action.warning !== undefined && action.displayMessage !== undefined) {
    return {
      ...state,
      id: {
        ...state.id,
        warning: action.warning,
        displayMessage: action.displayMessage,
      },
    }
  }

  if (action.type === 'set_pw_error' && action.warning !== undefined && action.displayMessage !== undefined) {
    return {
      ...state,
      pw: {
        ...state.pw,
        warning: action.warning,
        displayMessage: action.displayMessage,
      },
    }
  }

  return state
}

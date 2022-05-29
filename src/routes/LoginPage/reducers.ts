import { idRegExp, pwRegExp } from './utils'

interface IInput {
  value: string
  isValid: boolean
  warning: boolean
}

export interface IState {
  id: IInput
  pw: IInput
}

export interface IAction {
  type: string
  target: string
  value?: string
}

interface IError {
  warning?: boolean
  message?: string
  isLoginActive?: boolean
}

export const inputReducer = (state: IState, action: IAction) => {
  if (action.type === 'user_input' && action.value !== undefined) {
    const newState =
      action.target === 'id'
        ? {
            ...state,
            id: { value: action.value, warning: false, isValid: idRegExp.test(action.value) },
          }
        : {
            ...state,
            pw: { value: action.value, warning: false, isValid: pwRegExp.test(action.value) },
          }
    return newState
  }

  if (action.type === 'input_blur') {
    const newState =
      action.target === 'id'
        ? { ...state, id: { ...state.id, warning: !state.id.isValid } }
        : { ...state, pw: { ...state.pw, warning: !state.pw.isValid } }
    return newState
  }

  return state
}

export const errorReducer = (state: IError, action: IError) => {
  return {
    warning: action.warning !== undefined ? action.warning : state.warning,
    message: action.message || state.message,
    isLoginActive: action.isLoginActive || false,
  }
}

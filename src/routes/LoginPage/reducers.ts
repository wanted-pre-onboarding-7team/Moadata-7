import { idRegExp, pwRegExp } from './utils'

interface IState {
  value: string
  isValid: boolean
  warning: boolean
}

interface IAction {
  type: string
  value?: string
}

interface IErrorState {
  warning?: boolean
  message?: string
  isLoginActive?: boolean
}

interface IErrorAction extends IErrorState {
  reset?: boolean
}

export const idReducer = (state: IState, action: IAction) => {
  if (action.type === 'user_input' && action.value) {
    return {
      value: action.value,
      isValid: idRegExp.test(action.value),
      warning: false,
    }
  }

  if (action.type === 'input_blur') {
    return {
      value: state.value,
      isValid: state.isValid,
      warning: !state.isValid,
    }
  }

  if (action.type === 'input_focus') {
    return {
      value: state.value,
      isValid: state.isValid,
      warning: false,
    }
  }

  return state
}

export const pwReducer = (state: IState, action: IAction) => {
  if (action.type === 'user_input' && action.value) {
    return {
      value: action.value,
      isValid: pwRegExp.test(action.value),
      warning: false,
    }
  }

  if (action.type === 'input_blur') {
    return {
      value: state.value,
      isValid: state.isValid,
      warning: !state.isValid,
    }
  }

  if (action.type === 'input_focus') {
    return {
      value: state.value,
      isValid: state.isValid,
      warning: false,
    }
  }

  return state
}

export const errorReducer = (state: IErrorState, action: IErrorAction) => {
  return {
    warning: action.warning || state.warning,
    message: action.message || state.message,
    isLoginActive: action.isLoginActive || false,
  }
}

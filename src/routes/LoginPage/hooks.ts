import { Dispatch, useEffect } from 'react'
import { IAction, IInput } from './reducers'

export const useInputValid = (stateType: string, state: IInput, dispatch: Dispatch<IAction>) => {
  useEffect(() => {
    if (state.value === '') {
      dispatch({
        type: stateType === 'id' ? 'set_id' : 'set_pw',
        value: state.value,
        warning: false,
        displayMessage: false,
      })
      return
    }

    if (!state.isValid) {
      dispatch({
        type: stateType === 'id' ? 'set_id' : 'set_pw',
        value: state.value,
        warning: false,
        displayMessage: true,
      })
      return
    }

    dispatch({
      type: stateType === 'id' ? 'set_id' : 'set_pw',
      value: state.value,
      warning: false,
      displayMessage: false,
    })
  }, [dispatch, state.isValid, state.value, stateType])
}

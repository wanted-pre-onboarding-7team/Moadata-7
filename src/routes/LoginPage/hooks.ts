import { Dispatch, useEffect } from 'react'

import { IAction, IState } from './reducers'

export const useInputValid = (state: IState, dispatch: Dispatch<IAction>) => {
  const warning = false

  useEffect(() => {
    if (state.id.value === '') {
      dispatch({
        type: 'set_id_error',
        warning,
        displayMessage: false,
      })
      return
    }

    if (!state.id.isValid) {
      dispatch({
        type: 'set_id_error',
        warning,
        displayMessage: true,
      })
      return
    }

    dispatch({
      type: 'set_id_error',
      warning,
      displayMessage: false,
    })
  }, [dispatch, state.id.value, state.id.isValid, warning])

  useEffect(() => {
    if (state.pw.value === '') {
      dispatch({
        type: 'set_pw_error',
        warning,
        displayMessage: false,
      })
      return
    }

    if (!state.pw.isValid) {
      dispatch({
        type: 'set_pw_error',
        warning,
        displayMessage: true,
      })
      return
    }

    dispatch({
      type: 'set_pw_error',
      warning,
      displayMessage: false,
    })
  }, [dispatch, state.pw.isValid, state.pw.value, warning])
}

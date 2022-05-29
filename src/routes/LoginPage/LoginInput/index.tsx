import { ChangeEvent, Dispatch, FC, useRef } from 'react'
import { useMount } from 'react-use'
import { cx } from 'styles'

import { IAction, IState } from '../reducers'

import styles from './loginInput.module.scss'

interface IProps {
  type: 'id' | 'pw'
  state: IState
  dispatch: Dispatch<IAction>
}

const LoginInput: FC<IProps> = ({ type, state, dispatch }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: `set_${type}`,
      value: e.currentTarget.value,
      warning: false,
      displayMessage: !state[type].isValid,
    })
  }

  const blurInputHandler = () => {
    if (state[type].value === '') {
      dispatch({
        type: `set_${type}`,
        value: state[type].value,
        warning: false,
        displayMessage: state[type].displayMessage,
      })
      return
    }

    dispatch({
      type: `set_${type}`,
      value: state[type].value,
      warning: !state[type].isValid,
      displayMessage: state[type].displayMessage,
    })
  }

  useMount(() => {
    if (type === 'id' && inputRef.current) inputRef.current.focus()
  })

  return (
    <input
      ref={inputRef}
      type={type === 'id' ? 'text' : 'password'}
      className={cx({ [styles.inputWarning]: state[type].warning })}
      data-target={type}
      value={state[type].value}
      onChange={changeInputHandler}
      onBlur={blurInputHandler}
      placeholder={type === 'id' ? '아이디' : '비밀번호'}
      spellCheck={false}
    />
  )
}

export default LoginInput

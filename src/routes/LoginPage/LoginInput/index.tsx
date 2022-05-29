import { ChangeEvent, FocusEvent, Dispatch, FC, useRef } from 'react'
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
    if (!e.currentTarget.dataset.target) return
    dispatch({ type: 'user_input', target: e.currentTarget.dataset.target, value: e.currentTarget.value })
  }

  const blurInputHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.currentTarget.dataset.target) return
    if (e.currentTarget.value === '') return

    dispatch({ type: 'input_blur', target: e.currentTarget.dataset.target })
  }

  useMount(() => {
    if (type === 'id' && inputRef.current) inputRef.current.focus()
  })

  return (
    <input
      ref={inputRef}
      type={type === 'id' ? 'text' : 'password'}
      className={cx(styles.loginInput, { [styles.inputWarning]: state[type].warning })}
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

import { ChangeEvent, FocusEvent, Dispatch, FC } from 'react'
import { cx } from 'styles'

import { IAction, IState } from '../reducers'

import styles from './loginInput.module.scss'

interface IProps {
  type: 'id' | 'pw'
  state: IState
  dispatch: Dispatch<IAction>
}

const LoginInput: FC<IProps> = ({ type, state, dispatch }) => {
  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.dataset.target) return
    dispatch({ type: 'user_input', target: e.currentTarget.dataset.target, value: e.currentTarget.value })
  }

  const blurInputHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.currentTarget.dataset.target) return
    if (e.currentTarget.value === '') return

    dispatch({ type: 'input_blur', target: e.currentTarget.dataset.target })
  }

  return (
    <input
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

import { ChangeEvent, Dispatch, FC, useRef } from 'react'
import { useMount } from 'react-use'
import { cx } from 'styles'

import { IAction, IState } from '../reducers'

import styles from './loginInput.module.scss'

interface IProps {
  inputType: 'id' | 'pw'
  state: IState
  dispatch: Dispatch<IAction>
}

const LoginInput: FC<IProps> = ({ inputType, state, dispatch }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: `set_${inputType}_value`,
      value: e.currentTarget.value,
    })
  }

  const blurInputHandler = () => {
    dispatch({
      type: `set_${inputType}_warning`,
      warning: state[inputType].value === '' ? false : !state[inputType].isValid,
    })
  }

  useMount(() => {
    if (inputType === 'id' && inputRef.current) inputRef.current.focus()
  })

  const inputValueType = inputType === 'id' ? 'text' : 'password'
  const placeholder = inputType === 'id' ? '아이디' : '비밀번호'

  return (
    <input
      ref={inputRef}
      data-target={inputType}
      type={inputValueType}
      value={state[inputType].value}
      spellCheck={false}
      placeholder={placeholder}
      onChange={changeInputHandler}
      onBlur={blurInputHandler}
      className={cx(styles.loginInput, { [styles.loginInput_warning]: state[inputType].warning })}
    />
  )
}

export default LoginInput

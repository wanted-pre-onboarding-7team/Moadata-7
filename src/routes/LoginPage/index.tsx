import { ChangeEvent, useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cx } from 'styles'

import { MoaLogo } from 'assets/svgs'
import { errorReducer, idReducer, pwReducer } from './reducers'
import { errorMsgSet, ERROR_INIT, INPUT_INIT } from './utils'

import SEO from 'components/SEO'
import Button from 'components/Button'

import styles from './loginPage.module.scss'

const LoginPage = () => {
  const [userIdState, dispatchIdState] = useReducer(idReducer, INPUT_INIT)
  const [userPwState, dispatchPwState] = useReducer(pwReducer, INPUT_INIT)
  const [errorState, dispathErrorState] = useReducer(errorReducer, ERROR_INIT)
  const navigate = useNavigate()

  const loginHandler = () => {
    if (userIdState.value === process.env.REACT_APP_ADMIN_ID && userPwState.value === process.env.REACT_APP_ADMIN_PW) {
      navigate('/')
    }
    dispathErrorState({ warning: true, message: errorMsgSet.loginFailed })
  }

  const changeIdHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchIdState({ type: 'user_input', value: e.currentTarget.value })
  }

  const blurIdHandler = () => {
    dispatchIdState({ type: 'input_blur', value: userIdState.value })
  }

  const changePwHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchPwState({ type: 'user_input', value: e.currentTarget.value })
  }

  const blurPwHandler = () => {
    dispatchPwState({ type: 'input_blur', value: userPwState.value })
  }

  const focusIdHandler = () => {
    dispatchIdState({ type: 'input_focus' })
  }

  const focusPwHandler = () => {
    dispatchPwState({ type: 'input_focus' })
  }

  useEffect(() => {
    dispathErrorState({ warning: false })

    if (userIdState.warning) {
      dispathErrorState({ warning: true, message: errorMsgSet.idGuide })
      return
    }

    if (userPwState.warning) {
      dispathErrorState({ warning: true, message: errorMsgSet.pwGuide })
      return
    }

    if (!userIdState.isValid) {
      dispathErrorState({ message: errorMsgSet.idGuide })
      return
    }

    if (!userPwState.isValid) {
      dispathErrorState({ message: errorMsgSet.pwGuide })
      return
    }

    dispathErrorState({ warning: false, message: ' ', isLoginActive: true })
  }, [userIdState, userPwState])

  return (
    <div className={styles.loginPage}>
      <SEO title='로그인' />
      <form>
        <h1>백오피스</h1>
        <input
          type='text'
          className={cx({ [styles.inputWarning]: userIdState.warning })}
          value={userIdState.value}
          onChange={changeIdHandler}
          onFocus={focusIdHandler}
          onBlur={blurIdHandler}
          placeholder='아이디'
        />
        <input
          type='password'
          className={cx({ [styles.inputWarning]: userPwState.warning })}
          value={userPwState.value}
          onChange={changePwHandler}
          onFocus={focusPwHandler}
          onBlur={blurPwHandler}
          placeholder='비밀번호'
        />
        <p className={cx(styles.guide, { [styles.warning]: errorState.warning })}>{errorState.message}</p>
        <Button size='bigLarge' primary={errorState.isLoginActive} onClick={loginHandler}>
          로그인
        </Button>
      </form>
      <MoaLogo />
    </div>
  )
}
export default LoginPage

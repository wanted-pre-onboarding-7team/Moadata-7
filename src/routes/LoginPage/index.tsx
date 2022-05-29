import { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cx } from 'styles'

import { MoaLogo } from 'assets/svg'
import { useInputValid } from './hooks'
import { inputReducer } from './reducers'
import { errorMsgSet, INPUT_INIT } from './utils'

import SEO from 'components/SEO'
import LoginInput from './LoginInput'
import Button from 'components/Button'
import PopupPortal from './Popup/PopupPortal'
import Popup from './Popup'

import styles from './loginPage.module.scss'

const LoginPage = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [isLoginActive, setIsLoginActive] = useState(false)
  const [inputState, dispatchInputState] = useReducer(inputReducer, INPUT_INIT)

  const navigate = useNavigate()

  const loginHandler = () => {
    if (!isLoginActive) return

    if (
      inputState.id.value === process.env.REACT_APP_ADMIN_ID &&
      inputState.pw.value === process.env.REACT_APP_ADMIN_PW
    ) {
      navigate('/')
      return
    }

    setIsOpenPopup(true)
  }

  useEffect(() => {
    if (inputState.id.isValid && inputState.pw.isValid) {
      setIsLoginActive(true)
      return
    }

    setIsLoginActive(false)
  }, [inputState.id.isValid, inputState.pw.isValid])

  useInputValid(inputState, dispatchInputState)

  return (
    <div className={styles.loginPage}>
      <SEO title='로그인' />
      <form>
        <h1>백오피스</h1>
        <LoginInput inputType='id' state={inputState} dispatch={dispatchInputState} />
        <div className={styles.guideWrapper}>
          <p className={cx(styles.guide, { [styles.warning]: inputState.id.warning })}>
            {inputState.id.displayMessage ? errorMsgSet.id : ''}
          </p>
        </div>
        <LoginInput inputType='pw' state={inputState} dispatch={dispatchInputState} />
        <div className={styles.guideWrapper}>
          <p className={cx(styles.guide, { [styles.warning]: inputState.pw.warning })}>
            {inputState.pw.displayMessage ? errorMsgSet.pw : ''}
          </p>
        </div>
        <Button size='bigLarge' primary={isLoginActive} onClick={loginHandler}>
          로그인
        </Button>
      </form>
      <MoaLogo />
      <PopupPortal>{isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}</PopupPortal>
    </div>
  )
}
export default LoginPage

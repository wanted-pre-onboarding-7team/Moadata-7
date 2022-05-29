import { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cx } from 'styles'

import { MoaLogo } from 'assets/svg'
import { errorReducer, inputReducer } from './reducers'
import { errorMsgSet, ERROR_INIT, INPUT_INIT } from './utils'

import LoginInput from './LoginInput'

import SEO from 'components/SEO'
import Button from 'components/Button'
import PopupPortal from './Popup/PopupPortal'
import Popup from './Popup'

import styles from './loginPage.module.scss'

const LoginPage = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [inputState, dispatchInputState] = useReducer(inputReducer, INPUT_INIT)
  const [errorState, dispathErrorState] = useReducer(errorReducer, ERROR_INIT)
  const navigate = useNavigate()

  const loginHandler = () => {
    if (!errorState.isLoginActive) return

    if (
      inputState.id.value === process.env.REACT_APP_ADMIN_ID &&
      inputState.pw.value === process.env.REACT_APP_ADMIN_PW
    ) {
      navigate('/')
      return
    }

    setIsOpenPopup(true)
    dispathErrorState({ warning: true, message: errorMsgSet.loginFailed })
  }

  useEffect(() => {
    if (inputState.id.warning) {
      dispathErrorState({ warning: true, message: errorMsgSet.idGuide })
      return
    }
    if (inputState.pw.warning) {
      dispathErrorState({ warning: true, message: errorMsgSet.pwGuide })
      return
    }
    if (!inputState.id.isValid) {
      dispathErrorState({ warning: false, message: errorMsgSet.idGuide })
      return
    }
    if (!inputState.pw.isValid) {
      dispathErrorState({ warning: false, message: errorMsgSet.pwGuide })
      return
    }

    dispathErrorState({ warning: false, message: ' ', isLoginActive: true })
  }, [inputState])

  return (
    <div className={styles.loginPage}>
      <SEO title='로그인' />
      <form>
        <h1>백오피스</h1>
        <LoginInput type='id' state={inputState} dispatch={dispatchInputState} />
        <LoginInput type='pw' state={inputState} dispatch={dispatchInputState} />
        <p className={cx(styles.guide, { [styles.warning]: errorState.warning })}>{errorState.message}</p>
        <Button size='bigLarge' primary={errorState.isLoginActive} onClick={loginHandler}>
          로그인
        </Button>
      </form>
      <MoaLogo />
      <PopupPortal>{isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}</PopupPortal>
    </div>
  )
}
export default LoginPage

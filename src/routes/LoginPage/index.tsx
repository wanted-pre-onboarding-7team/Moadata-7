import { useState } from 'react'
import styles from './loginPage.module.scss'

import SEO from 'components/SEO'
import Button from 'components/Button'
import PopupPortal from './Popup/PopupPortal'
import Popup from './Popup'

const LoginPage = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  const handlebuttonClick = () => {
    setIsOpenPopup(true)
  }

  return (
    <div>
      <SEO title='로그인' />
      <Button size='xsmall' onClick={handlebuttonClick} secondary>
        modal open
      </Button>
      <PopupPortal>{isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}</PopupPortal>
    </div>
  )
}
export default LoginPage

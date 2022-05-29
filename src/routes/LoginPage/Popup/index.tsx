import { useRef } from 'react'
import { useClickAway } from 'react-use'
import styles from './popup.module.scss'

import { ExclamationIcon } from 'assets/svg'

import Button from 'components/Button'

interface Props {
  setIsOpenPopup: Function
}

const Popup = ({ setIsOpenPopup }: Props) => {
  const outsideRef = useRef<HTMLInputElement>(null)

  const handleCloseButtonClick = () => {
    setIsOpenPopup(false)
  }

  useClickAway(outsideRef, () => {
    setIsOpenPopup(false)
  })

  return (
    <div className={styles.backdrop}>
      <div className={styles.popupBox} ref={outsideRef}>
        <ExclamationIcon width={80} height={80} />
        <p>아이디 또는 비밀번호가 일치하지 않습니다.</p>
        <Button size='xsmall' onClick={handleCloseButtonClick} secondary>
          확인
        </Button>
      </div>
    </div>
  )
}

export default Popup

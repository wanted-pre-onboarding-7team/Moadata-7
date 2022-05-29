import styles from './manageDetailPage.module.scss'

import Input from 'components/Input'
import { useRecoilValue } from 'recoil'
import { userInfoState } from './state'

const UserInfo = () => {
  const userInfo = useRecoilValue(userInfoState)
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.userInfo}>
        <Input text='로그인 ID' id='1' value={userInfo.id} readonly />
        <Input text='회원 번호' id='2' value={userInfo.member_seq} readonly />
      </div>
      <div>
        <Input text='가입일시' id='3' value={userInfo.crt_ymdt} />
      </div>
    </div>
  )
}

export default UserInfo

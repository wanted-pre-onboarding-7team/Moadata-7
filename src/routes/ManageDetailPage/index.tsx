import styles from './manageDetailPage.module.scss'
import StepChart from './StepChart'

import { useParams, useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'

import { useSetRecoilState } from 'recoil'
import { userInfoState } from './state'

import SEO from 'components/SEO'
import UserInfo from './UserInfo'
import { useCheckLogin } from 'hooks'

export const MEMBER_LIST = [
  { member_seq: '136', crt_ymdt: '2022-02-26 12:40:14', id: 'yhorong21' },
  { member_seq: '328', crt_ymdt: '2022-04-16 07:19:31', id: 'seoltosil95' },
  { member_seq: '380', crt_ymdt: '2022-04-17 03:00:23', id: 'yujaemin92' },
]

const ManageDetailPage = () => {
  const setUserInfo = useSetRecoilState(userInfoState)
  const params = useParams()
  const { loginCheck } = useCheckLogin()
  const user = MEMBER_LIST.filter((obj) => {
    return obj.member_seq === params.memberSeq
  })[0]

  const navigate = useNavigate()

  useMount(() => {
    navigate(`/member/manage/${params.memberSeq}`, { replace: true })
    setUserInfo(user)
    loginCheck()
  })

  return (
    <>
      <SEO title='회원상세' />
      <nav className={styles.subNav}>
        홈 &gt;
        <button type='button' onClick={() => navigate(-1)}>
          회원관리
        </button>
        &gt; 회원상세
      </nav>
      <h1 className={styles.title}> 회원 상세 정보</h1>
      <div className={styles.manageDetailContainer}>
        <UserInfo />
        <StepChart />
      </div>
    </>
  )
}
export default ManageDetailPage

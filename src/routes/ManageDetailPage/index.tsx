import styles from './manageDetailPage.module.scss'

import { useParams, useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'

import { useSetRecoilState } from 'recoil'
import { userInfoState } from './state'

import { MEMBER_LIST } from 'model'

import UserInfo from './UserInfo'
import SEO from 'components/SEO'
import HeartRate from './HeartRate'
import StepChart from './StepChart'

const ManageDetailPage = () => {
  const setUserInfo = useSetRecoilState(userInfoState)
  const params = useParams()
  const user = MEMBER_LIST.filter((obj) => {
    return obj.member_seq === params.memberSeq
  })[0]

  const navigate = useNavigate()

  useMount(() => {
    navigate(`/member/manage/${params.memberSeq}`, { replace: true })
    setUserInfo(user)
  })

  return (
    <>
      <SEO title='회원상세' />
      <nav className={styles.subNav}>
        홈 &nbsp; &gt; &nbsp;
        <button type='button' onClick={() => navigate(-1)}>
          &nbsp; 회원관리
        </button>
        &nbsp; &gt; &nbsp; 회원상세
      </nav>
      <h1 className={styles.title}> 회원 상세 정보</h1>
      <div className={styles.manageDetailContainer}>
        <UserInfo />
        <div className={styles.chartContainer}>
          <HeartRate />
          <StepChart />
        </div>
      </div>
    </>
  )
}
export default ManageDetailPage

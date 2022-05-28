import SEO from 'components/SEO'
import styles from './manageDetailPage.module.scss'
import Input from 'components/Input'
import { useParams } from 'react-router-dom'

export const MEMBER_LIST = [
  { member_seq: '136', crt_ymdt: '2022-02-26 12:40:14', id: 'yhorong21' },
  { member_seq: '328', crt_ymdt: '2022-04-16 07:19:31', id: 'seoltosil95' },
  { member_seq: '380', crt_ymdt: '2022-04-17 03:00:23', id: 'yujaemin92' },
]

const ManageDetailPage = () => {
  const params = useParams()
  // const user = MEMBER_LIST.findIndex((obj) => {
  //   return MEMBER_LIST[obj.member_seq === params.memberSeq]
  // })

  return (
    <>
      <SEO title='회원상세' />
      <nav className={styles.subNav}>홈 &gt; 회원관리 &gt; 회원상세</nav>
      <h1 className={styles.title}> 회원 상세 정보</h1>

      <div className={styles.manageDetailContainer}>
        <div className={styles.userContainer}>
          <Input text='로그인 ID' id='1' value='1' />
          <Input text='회원 번호' id='2' value='1' />
        </div>
        <Input text='가입일시' id='3' value='2021-12-22' />
      </div>
    </>
  )
}
export default ManageDetailPage

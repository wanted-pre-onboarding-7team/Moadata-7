import SEO from 'components/SEO'
import styles from './manageDetailPage.module.scss'
import Input from 'components/Input'

const ManageDetailPage = () => {
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

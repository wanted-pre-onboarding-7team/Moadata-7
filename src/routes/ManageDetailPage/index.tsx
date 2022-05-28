import SEO from 'components/SEO'
import styles from './manageDetailPage.module.scss'

const ManageDetailPage = () => {
  return (
    <>
      <SEO title='회원상세' />
      <nav className={styles.subNav}>홈 &gt; 회원관리 &gt; 회원상세</nav>
      <h1 className={styles.title}> 회원 상세 정보</h1>

      <div className={styles.manageDetailContainer}>하위</div>
    </>
  )
}
export default ManageDetailPage

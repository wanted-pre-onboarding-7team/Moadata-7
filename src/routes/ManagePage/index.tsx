import styles from './managePage.module.scss'

import SEO from 'components/SEO'

const ManagePage = () => {
  return (
    <>
      <SEO title='회원관리' />
      <nav className={styles.subNav}>홈 &gt; 회원관리</nav>
      <h1 className={styles.title}> 회원관리</h1>

      <div className={styles.manageContainer}>하위</div>
    </>
  )
}
export default ManagePage

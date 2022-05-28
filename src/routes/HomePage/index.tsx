import styles from './homePage.module.scss'

import SEO from 'components/SEO'

const HomePage = () => {
  return (
    <>
      <SEO title='MoaData-7' />
      <nav className={styles.subNav}>홈</nav>
      <h1 className={styles.title}> 백오피스 홈 대시보드</h1>
      <div className={styles.homeContainer}>하위</div>
    </>
  )
}
export default HomePage

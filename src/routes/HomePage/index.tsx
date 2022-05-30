import styles from './homePage.module.scss'

import { DashBoardBG } from 'assets/svg'
import SEO from 'components/SEO'

const HomePage = () => {
  return (
    <>
      <SEO title='MoaData-7' />
      <nav className={styles.subNav}>홈</nav>
      <h1 className={styles.title}> 백오피스 홈 대시보드</h1>
      <div className={styles.homeContainer}>
        <DashBoardBG width={700} height={430} />
        <p>현재 지원하지 않는 페이지입니다.</p>
      </div>
    </>
  )
}
export default HomePage

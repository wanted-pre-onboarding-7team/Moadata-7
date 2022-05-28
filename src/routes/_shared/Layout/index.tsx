import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

import GNB from '../GNB'
import Header from '../Header'

const Layout = () => {
  return (
    <div className={styles.holecontainer}>
      <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.container}>
        <aside className={styles.aside}>
          <GNB />
        </aside>
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout

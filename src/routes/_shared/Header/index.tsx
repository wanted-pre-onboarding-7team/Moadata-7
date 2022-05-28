import styles from './header.module.scss'
import { MoaLogo } from 'assets/svg'

import { NavLink } from 'react-router-dom'

import Button from 'components/Button'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <NavLink to='/'>
            <MoaLogo className={styles.moaLogo} />
          </NavLink>
        </div>
        <ul className={styles.user}>
          <li>moaAdmin</li>
          <li>
            <Button size='nomal' primary>
              <NavLink to='login'>로그아웃</NavLink>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

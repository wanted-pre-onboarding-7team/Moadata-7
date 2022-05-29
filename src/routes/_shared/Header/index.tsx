import styles from './header.module.scss'
import { MoaLogo } from 'assets/svg'

import { NavLink } from 'react-router-dom'

import Button from 'components/Button'
import { useCheckLogin } from 'hooks'

const Header = () => {
  const { logOut } = useCheckLogin()
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
            <Button size='normal' onClick={logOut} primary>
              로그아웃
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

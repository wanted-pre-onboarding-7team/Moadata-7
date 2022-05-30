import styles from './header.module.scss'
import { MoaLogo } from 'assets/svg'

import { NavLink } from 'react-router-dom'

import Button from 'components/Button'
import { useCheckLogin } from 'hooks'
import { useMount } from 'react-use'

const Header = () => {
  const { logOut, loginCheck, userId } = useCheckLogin()
  useMount(() => {
    loginCheck()
  })
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <NavLink to='/'>
            <MoaLogo className={styles.moaLogo} />
          </NavLink>
        </div>
        <ul className={styles.user}>
          <li>{userId}</li>
          <li>
            <Button size='normal' onClick={logOut}>
              로그아웃
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

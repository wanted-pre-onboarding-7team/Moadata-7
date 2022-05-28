import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'
import Button from 'components/Button'

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.user}>
        <li>7팀</li>
        <li>
          <Button size='large' primary>
            <NavLink to='login'>로그아웃</NavLink>
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Header

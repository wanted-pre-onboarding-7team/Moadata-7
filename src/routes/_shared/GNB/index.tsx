import { NavLink } from 'react-router-dom'
import styles from './gnb.module.scss'
import Logo from '../../../assets/images/moaLogo.png'
import { cx } from 'styles'

const GNB = () => {
  return (
    <div className={styles.gnb}>
      <div className={styles.wrapper}>
        <ul className={styles.navList}>
          <li>
            <NavLink to='' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              백오피스 홈
              <div className={styles.sideLine} />
            </NavLink>
          </li>
          <li>
            <NavLink to='member/manage' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              회원관리
              <div className={styles.sideLine} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GNB

import { NavLink } from 'react-router-dom'
import styles from './gnb.module.scss'
import { cx } from 'styles'
import { GNB_LIST } from 'model'

const GNB = () => {
  return (
    <div className={styles.gnb}>
      <div className={styles.wrapper}>
        <ul className={styles.navList}>
          {GNB_LIST.map((item) => {
            return (
              <li key={item.key}>
                <NavLink to={item.path} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                  {item.title}
                  <div className={styles.sideLine} />
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default GNB

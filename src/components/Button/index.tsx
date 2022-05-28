import { ReactNode } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface Props {
  children: ReactNode
  size: 'bigLarge' | 'large' | 'nomal' | 'small'
  primary?: boolean
  onClick?: () => void
  isAtive?: boolean
}

const Button = ({ children, size, primary, onClick, isAtive }: Props) => {
  return (
    <button
      type='button'
      className={cx(styles.button, styles[size], { [styles.primary]: primary }, { [styles.isAtive]: isAtive })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

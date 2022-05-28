import { ReactNode } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface Props {
  children: ReactNode
  size: 'bigLarge' | 'large' | 'nomal' | 'small' | 'xsmall'
  primary?: boolean
  secondary?: boolean
  onClick?: () => void
}

const Button = ({ children, size, primary, secondary, onClick }: Props) => {
  return (
    <button
      type='button'
      className={cx(styles.button, styles[size], { [styles.primary]: primary }, { [styles.secondary]: secondary })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

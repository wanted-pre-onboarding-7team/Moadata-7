import { ReactNode, MouseEventHandler } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface Props {
  children: ReactNode
  size: 'extraLarge' | 'large' | 'normal' | 'small' | 'xsmall'
  onClick?: MouseEventHandler
  primary?: boolean
  secondary?: boolean
  type?: 'submit' | 'button'
}

const Button = ({ children, size, primary, secondary, onClick, type }: Props) => {
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

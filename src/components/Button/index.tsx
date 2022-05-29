import { ReactNode, MouseEventHandler } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface Props {
  children: ReactNode
  size: 'extraLarge' | 'large' | 'normal' | 'small'
  primary?: boolean
  onClick?: MouseEventHandler
}

const Button = ({ children, size, primary, onClick }: Props) => {
  return (
    <button type='button' className={cx(styles.button, styles[size], { [styles.primary]: primary })} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

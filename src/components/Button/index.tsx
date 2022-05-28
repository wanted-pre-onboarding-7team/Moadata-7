import { ReactNode, MouseEvent } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface Props {
  children: ReactNode
  size: 'bigLarge' | 'large' | 'nomal' | 'small'
  primary?: boolean
  onClick?: () => void
  onClickValue?: (item: string) => void
  isAtive?: boolean
}

const Button = ({ children, size, primary, onClick, onClickValue, isAtive }: Props) => {
  const handleItemClick = (e: MouseEvent<HTMLButtonElement>) => {
    const item = e.currentTarget.textContent

    if (onClick) {
      onClick()
    }

    if (onClickValue) {
      if (item === null) return
      onClickValue(item)
    }
  }

  return (
    <button
      type='button'
      className={cx(styles.button, styles[size], { [styles.primary]: primary }, { [styles.isAtive]: isAtive })}
      onClick={onClick ?? handleItemClick}
    >
      {children}
    </button>
  )
}

export default Button

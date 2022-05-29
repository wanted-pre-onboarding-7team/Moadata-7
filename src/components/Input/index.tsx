import { ChangeEventHandler } from 'react'
import styles from './input.module.scss'

interface Prop {
  text: string
  id: string
  value: string | string[]
  onChage?: ChangeEventHandler
}

const Input = ({ text, id, value, onChage }: Prop) => {
  if (Array.isArray(value))
    return (
      <div className={styles.inputBox}>
        <div className={styles.labelContainer}>
          <label htmlFor={id}>{text}</label>
        </div>
        <input itemID={id} type='text' value={value[0]} readOnly />
        <span> ~ </span>
        <input itemID={id} type='text' value={value[1]} readOnly />
      </div>
    )

  return (
    <div className={styles.inputBox}>
      <div className={styles.labelContainer}>
        <label htmlFor={id}>{text}</label>
      </div>
      <input itemID={id} type='text' value={value} onChange={onChage} placeholder='전체' />
    </div>
  )
}

export default Input

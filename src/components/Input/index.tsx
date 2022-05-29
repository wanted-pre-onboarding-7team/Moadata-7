import { ChangeEventHandler } from 'react'
import styles from './input.module.scss'

interface Prop {
  text: string
  id: string
  value: string | string[]
  onChage?: ChangeEventHandler
  placeholder?: string
  readonly?: boolean
}

const Input = ({ text, id, value, onChage, placeholder, readonly }: Prop) => {
  if (Array.isArray(value))
    return (
      <div className={styles.inputBox}>
        <div className={styles.labelContainer}>
          <label htmlFor={id}>{text}</label>
        </div>
        <input itemID={id} type='text' value={value[0]} readOnly placeholder={placeholder} />
        <span> ~ </span>
        <input itemID={id} type='text' value={value[1]} readOnly placeholder={placeholder} />
      </div>
    )

  return (
    <div className={styles.inputBox}>
      <div className={styles.labelContainer}>
        <label htmlFor={id}>{text}</label>
      </div>
      {readonly ? (
        <input itemID={id} type='text' defaultValue={value} placeholder={placeholder} readOnly />
      ) : (
        <input itemID={id} type='text' defaultValue={value} onChange={onChage} placeholder={placeholder} />
      )}
    </div>
  )
}

export default Input

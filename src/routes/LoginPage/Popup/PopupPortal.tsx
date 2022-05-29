import { ReactNode } from 'react'
import ReactDom from 'react-dom'

interface Props {
  children: ReactNode
}

const PopupPortal = ({ children }: Props) => {
  const el = document.getElementById('popup-root') as HTMLElement
  return ReactDom.createPortal(children, el)
}

export default PopupPortal

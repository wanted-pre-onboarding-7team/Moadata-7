import Button from 'components/Button'
import { MouseEventHandler } from 'react'

interface Props {
  startDay: string
  endDay: string
  onClick: MouseEventHandler
}

const RangeDate = ({ startDay, endDay, onClick }: Props) => {
  return (
    <div>
      <input type='text' value={startDay} readOnly />
      <input type='text' value={endDay} readOnly />
      <Button size='normal' onClick={onClick}>
        시작일
      </Button>
      <Button size='normal' onClick={onClick}>
        일주일
      </Button>
      <Button size='normal' onClick={onClick}>
        전체
      </Button>
    </div>
  )
}

export default RangeDate

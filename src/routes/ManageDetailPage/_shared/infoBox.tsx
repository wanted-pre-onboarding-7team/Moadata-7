import styles from './infoBox.module.scss'
import { MouseEventHandler, useState, MouseEvent } from 'react'
import { cx } from 'styles'

interface IDateRange {
  startDate: string | undefined
  lastDate: string | undefined
}

interface IProps {
  dateRange: IDateRange
  onClick: MouseEventHandler
}

const InfoBox = ({ dateRange, onClick }: IProps) => {
  const [isClicked, setIsClicked] = useState<string>('전체')

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick(e)
    setIsClicked(e.currentTarget.name)
  }

  return (
    <div className={styles.rangeWrap}>
      <div className={styles.buttonsBackground}>
        <button
          className={cx({ [styles.startButton]: isClicked === '시작일' })}
          type='button'
          name='시작일'
          onClick={handleButtonClick}
        >
          시작일
        </button>
        <button
          className={cx({ [styles.weekButton]: isClicked === '일주일' })}
          type='button'
          name='일주일'
          onClick={handleButtonClick}
        >
          일주일
        </button>
        <button
          className={cx({ [styles.allButton]: isClicked === '전체' })}
          type='button'
          name='전체'
          onClick={handleButtonClick}
        >
          전체
        </button>
      </div>
      <dl>
        <div className={styles.periodBox}>
          <dt>조회기간</dt>
          <dd>
            {dateRange?.startDate} ~ {dateRange?.lastDate}
          </dd>
        </div>
      </dl>
    </div>
  )
}

export default InfoBox

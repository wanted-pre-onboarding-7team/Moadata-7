import styles from './infoBox.module.scss'
import { MouseEventHandler, useState } from 'react'
import cx from 'classnames'

import Button from 'components/Button'

interface IAverageData {
  title: string
  value: string | null
}

interface IDateRange {
  startDate: string | undefined
  lastDate: string | undefined
}

interface IProps {
  averageData: IAverageData
  dateRange: IDateRange
  onClick: MouseEventHandler
}

const InfoBox = ({ averageData, dateRange, onClick }: IProps) => {
  const [isClicked, setIsClicked] = useState<string>('start')
  const handleButtonClick = (e: any) => {
    setIsClicked(e.currentTarget.name)
  }

  return (
    <section className={styles.heartRate}>
      <div className={styles.rangeWrap}>
        <dl>
          <div className={styles.periodBox}>
            <dt>조회기간</dt>
            <dd>{/* {startDate} ~ {lastDate} */}</dd>
          </div>
          <div>
            <dt>평균 심박수</dt>
            <dd className={styles.averageContent}>BPM</dd>
          </div>
        </dl>

        <div className={styles.buttonsBackground}>
          <button
            className={cx({ [styles.startButton]: isClicked === 'start' })}
            type='button'
            name='start'
            onClick={handleButtonClick}
          >
            시작일
          </button>
          <button
            className={cx({ [styles.weekButton]: isClicked === 'week' })}
            type='button'
            name='week'
            onClick={handleButtonClick}
          >
            일주일
          </button>
          <button
            className={cx({ [styles.allButton]: isClicked === 'all' })}
            type='button'
            name='all'
            onClick={handleButtonClick}
          >
            전체
          </button>
        </div>
      </div>
    </section>
  )
}

export default InfoBox

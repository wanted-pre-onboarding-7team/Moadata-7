import styles from './infoBox.module.scss'
import { MouseEventHandler } from 'react'

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
  return (
    <div className={styles.infoBox}>
      <dl>
        <div>
          <dt>{averageData?.title}</dt>
          <dd>{averageData?.value}</dd>
        </div>
        <div>
          <dt>조회기간</dt>
          <dd>
            {dateRange?.startDate} ~ {dateRange?.lastDate}
          </dd>
        </div>
      </dl>
      <div className={styles.buttonsWrap}>
        <Button size='small' primary onClick={onClick}>
          시작일
        </Button>
        <Button size='small' primary onClick={onClick}>
          일주일
        </Button>
        <Button size='small' primary onClick={onClick}>
          전체
        </Button>
      </div>
    </div>
  )
}

export default InfoBox

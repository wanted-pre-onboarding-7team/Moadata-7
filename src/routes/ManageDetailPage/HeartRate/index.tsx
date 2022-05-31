import styles from './heartRate.module.scss'
import { useState, MouseEvent } from 'react'
import { useRecoilValue } from 'recoil'

import { userInfoState } from '../state'
import { getAverageBPM, getChartData, getDateRange } from './utils'

import Chart from './HeartRateChart/Chart'
import InfoBox from '../_shared/infoBox'

const HeartBeat = () => {
  const [selectRange, setSelectRange] = useState<string>('전체')
  const userInfo = useRecoilValue(userInfoState)

  const dateRange = getDateRange(selectRange, userInfo)
  const chartData = getChartData(selectRange, userInfo)

  const rangeData = { startDate: dateRange[0], lastDate: dateRange[1] }
  const averageData = getAverageBPM(selectRange, userInfo)

  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    setSelectRange(e.currentTarget.name)
  }

  return (
    <section className={styles.heartRate}>
      <div className={styles.topWrap}>
        <h2>심박수</h2>
        <div className={styles.averageWrap}>
          <dt>평균</dt>
          <dd>{averageData}</dd>
        </div>
      </div>
      <Chart chartData={chartData} selectRange={selectRange} />
      <InfoBox dateRange={rangeData} onClick={onClick} />
    </section>
  )
}

export default HeartBeat

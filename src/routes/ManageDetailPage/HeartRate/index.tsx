import styles from './heartRate.module.scss'
import { useState, MouseEvent } from 'react'
import { useRecoilValue } from 'recoil'

import { userInfoState } from '../state'
import { getAverageBPM, getChartData, getDateRange } from './utils'

import Chart from './HeartRateChart/Chart'
import InfoBox from '../_shared/infoBox'

const HeartBeat = () => {
  const [selectRange, setSelectRange] = useState<string>('시작일')
  const userInfo = useRecoilValue(userInfoState)

  const dateRange = getDateRange(selectRange, userInfo)
  const chartData = getChartData(selectRange, userInfo)

  const rangeData = { startDate: dateRange[0], lastDate: dateRange[1] }
  const averageData = { title: '평균심박수', value: getAverageBPM(selectRange, userInfo) }

  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    if (!e.currentTarget.textContent) return
    setSelectRange(e.currentTarget.textContent)
  }

  return (
    <section className={styles.heartRate}>
      <h2>심박수</h2>
      <Chart chartData={chartData} selectRange={selectRange} />
      <InfoBox averageData={averageData} dateRange={rangeData} onClick={onClick} />
    </section>
  )
}

export default HeartBeat

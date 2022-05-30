import styles from './heartRate.module.scss'
import { useState, MouseEvent } from 'react'
import { useRecoilValue } from 'recoil'

import { userInfoState } from '../state'

import Chart from './HeartRateChart/Chart'
import Button from 'components/Button'
import { getAverageBPM, getDateRange } from './utils'

const HeartBeat = () => {
  const [selectRange, setSelectRange] = useState<string>('시작일')
  const userInfo = useRecoilValue(userInfoState)
  const [startDate, lastDate] = getDateRange(selectRange, userInfo)
  const averageBPM = getAverageBPM(selectRange, userInfo)

  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    if (!e.currentTarget.textContent) return
    setSelectRange(e.currentTarget.textContent)
  }

  return (
    <section className={styles.heartRate}>
      <h2>심박수</h2>
      <Chart selectRange={selectRange} userInfo={userInfo} />
      <div className={styles.rangeWrap}>
        <dl>
          <div>
            <dt>평균 심박수</dt>
            <dd>{averageBPM}BPM</dd>
          </div>
          <div>
            <dt>조회기간</dt>
            <dd>
              {startDate} ~ {lastDate}
            </dd>
          </div>
        </dl>
        <div className={styles.buttonsWrap}>
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
      </div>
    </section>
  )
}

export default HeartBeat

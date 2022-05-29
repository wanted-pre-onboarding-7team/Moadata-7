import styles from './heartRate.module.scss'

import { useState, MouseEvent } from 'react'

import Chart from './HeartRateChart/Chart'
import Button from 'components/Button'

const HeartBeat = () => {
  const [selectRange, setSelectRange] = useState<string>('시작일')

  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    if (!e.currentTarget.textContent) return
    setSelectRange(e.currentTarget.textContent)
  }

  return (
    <section className={styles.heartRate}>
      <div className={styles.chartWrap}>
        <h2>심박수</h2>
        <Chart selectRange={selectRange} />
      </div>
      <div className={styles.rangeWrap}>
        <dl>
          <dt>조회기간</dt>
          <dd>2022.02.02 ~ 2022.02.02</dd>
        </dl>
        <div className={styles.buttonsWrap}>
          <Button size='nomal' onClick={onClick}>
            시작일
          </Button>
          <Button size='nomal' onClick={onClick}>
            일주일
          </Button>
          <Button size='nomal' onClick={onClick}>
            전체
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeartBeat

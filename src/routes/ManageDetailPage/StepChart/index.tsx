import React, { useState, MouseEvent, useCallback } from 'react'

import { DailyStepDB, RangeStepDB, totalStepData } from '../DB'
import styles from './stepChart.module.scss'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

import { userInfoState } from '../state'
import { useRecoilValue } from 'recoil'
import Chart from './Chart'
import InfoBox from '../_shared/infoBox'

dayjs.extend(isSameOrBefore)

const StepChart = () => {
  const [endDay, setEndDay] = useState(dayjs().format('YYYY-MM-DD'))
  const [selectRange, setSelectRange] = useState<string>('전체')
  const userInfo = useRecoilValue(userInfoState)
  const startDay = dayjs(userInfo.crt_ymdt).format('YYYY-MM-DD')

  const changeDB = useCallback(
    (range: string) => {
      const arr =
        range === '시작일' ? DailyStepDB[`member${userInfo.member_seq}`] : RangeStepDB[`member${userInfo.member_seq}`]

      return arr
        .filter((v, i) => {
          return dayjs(v.crt_ymdt.split(' ')[0]).isSameOrBefore(dayjs(endDay)) && arr.indexOf(v) === i
        })
        .sort((a, b) => new Date(a.crt_ymdt).getTime() - new Date(b.crt_ymdt).getTime())
        .map((item, idx) => {
          return {
            x: item.crt_ymdt,
            y: item.steps,
            label: item.steps,
            index: idx,
          }
        })
    },
    [endDay, userInfo.member_seq]
  )

  if (!userInfo.crt_ymdt) return null

  const totalStep = totalStepData[`member${userInfo.member_seq}`]
    .filter((item) => {
      return dayjs(item.crt_ymdt.split(' ')[0]).isSameOrBefore(dayjs(endDay))
    })
    .reduce((a, b) => {
      return a + b.steps
    }, 0)

  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    const onClickText = e.currentTarget.name

    const endDayArray = {
      시작일: dayjs(userInfo.crt_ymdt).format('YYYY-MM-DD'),
      일주일: dayjs(userInfo.crt_ymdt).add(6, 'day').format('YYYY-MM-DD'),
      전체: dayjs().format('YYYY-MM-DD'),
    }[onClickText]

    if (!endDayArray) return

    setSelectRange(e.currentTarget.name)
    setEndDay(endDayArray)
    if (!e.currentTarget.textContent) return
    changeDB(e.currentTarget.textContent)
  }

  const rangeData = { startDate: startDay, lastDate: endDay }
  return (
    <section className={styles.chartWrap}>
      <div className={styles.topWrap}>
        <h2>걸음수</h2>
        <div className={styles.averageWrap}>
          <dt>총</dt>
          <dd>{totalStep.toLocaleString()} 걸음</dd>
        </div>
      </div>
      <Chart StepDataList={changeDB(selectRange)} selectRange={selectRange} />
      <InfoBox dateRange={rangeData} onClick={onClick} />
    </section>
  )
}

export default StepChart

import React, { useState, MouseEvent, useEffect, useMemo } from 'react'

import { StepDB } from '../DB'
import styles from './stepChart.module.scss'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

import { userInfoState } from '../state'
import { useRecoilValue } from 'recoil'
import Chart from './Chart'
import RangeDate from './RangeDate'

dayjs.extend(isSameOrBefore)

const StepChart = () => {
  const userInfo = useRecoilValue(userInfoState)
  const [endDay, setEndDay] = useState(dayjs().format('YYYY-MM-DD'))

  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    if (!e.currentTarget.textContent) return
    const onClickText = e.currentTarget.textContent

    const endDayArray = {
      시작일: dayjs(userInfo.crt_ymdt).format('YYYY-MM-DD'),
      일주일: dayjs(userInfo.crt_ymdt).add(1, 'week').format('YYYY-MM-DD'),
      전체: dayjs().format('YYYY-MM-DD'),
    }[onClickText]

    if (!endDayArray) return

    setEndDay(endDayArray)
  }

  const StepDataList = StepDB[`member${userInfo.member_seq}`]
    .filter((item) => {
      return dayjs(item.crt_ymdt.split(' ')[0]).isSameOrBefore(dayjs(endDay))
    })
    .sort((a, b) => new Date(a.crt_ymdt).getTime() - new Date(b.crt_ymdt).getTime())
    .map((item) => {
      return {
        x: item.crt_ymdt,
        y: item.steps,
        label: item.steps,
      }
    })

  if (!userInfo.crt_ymdt) return null
  return (
    <div className={styles.chartWrap}>
      <Chart StepDataList={StepDataList} />

      <RangeDate onClick={onClick} startDay={dayjs(userInfo.crt_ymdt).format('YYYY-MM-DD')} endDay={endDay} />
    </div>
  )
}

export default StepChart

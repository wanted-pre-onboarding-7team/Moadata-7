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
  const [endDay, setEndDay] = useState(dayjs().format('YYYY-MM-DD'))
  const [selectRange, setSelectRange] = useState<string>('시작일')
  const userInfo = useRecoilValue(userInfoState)
  const startDay = dayjs(userInfo.crt_ymdt).format('YYYY-MM-DD')

  if (!userInfo.crt_ymdt) return null

  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    if (!e.currentTarget.textContent) return
    const onClickText = e.currentTarget.textContent

    const endDayArray = {
      시작일: startDay,
      일주일: dayjs(userInfo.crt_ymdt).add(1, 'week').format('YYYY-MM-DD'),
      전체: dayjs().format('YYYY-MM-DD'),
    }[onClickText]

    if (!endDayArray) return

    setSelectRange(e.currentTarget.textContent)
    setEndDay(endDayArray)
  }

  const StepDataList = StepDB[`member${userInfo.member_seq}`]
    .filter((item) => {
      // 시작일일땐 하루 다나오고 일주일이나 전체 일때는 날별로
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
  // 하루마다 제일 늦은 시간의 걸음수 출력

  return (
    <div className={styles.chartWrap}>
      <Chart StepDataList={StepDataList} selectRange={selectRange} />

      <RangeDate onClick={onClick} startDay={startDay} endDay={endDay} />
    </div>
  )
}

export default StepChart

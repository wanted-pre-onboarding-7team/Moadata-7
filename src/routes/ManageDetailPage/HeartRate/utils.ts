import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

import { IUserInfo } from 'routes/ManageDetailPage/state'
import { heartRateDB } from '../DB'

dayjs.extend(isBetween)

const getDateRange = (select: string, userInfo: IUserInfo) => {
  const startDate = userInfo.crt_ymdt.split(' ')[0]
  let lastDate

  if (select === '시작일') lastDate = startDate
  if (select === '일주일') lastDate = dayjs(startDate).add(6, 'day').format('YYYY-MM-DD')
  if (select === '전체') lastDate = dayjs().format('YYYY-MM-DD')

  return [startDate, lastDate]
}

const getChartData = (select: string, userInfo: IUserInfo) => {
  if (!userInfo.member_seq) return null

  const memberData = heartRateDB[`member${userInfo.member_seq}`]
  const [startDay, lastDay] = getDateRange(select, userInfo)

  const filteredDataByRange = memberData.filter((data) =>
    dayjs(data.crt_ymdt).isBetween(startDay, lastDay, 'day', '[]')
  )

  const chartData = filteredDataByRange.map((data) => ({ x: data.crt_ymdt, y: data.avg_beat }))

  return chartData
}

const getAverageBPM = (select: string, userInfo: IUserInfo) => {
  const chartData = getChartData(select, userInfo)
  if (!chartData) return null

  const sumBPM = Number(chartData.reduce((sum, cur) => sum + cur.y, 0))
  const averageBPM = Math.floor(sumBPM / chartData.length)

  return `${averageBPM} BPM`
}

const changeDateFormat = (dateValue: string, select: string) => {
  if (select === '시작일') return dateValue.split(' ')[1]
  return dayjs(dateValue).format('YYYY-MM-DD \n HH-MM')
}

export { getDateRange, getChartData, getAverageBPM, changeDateFormat }

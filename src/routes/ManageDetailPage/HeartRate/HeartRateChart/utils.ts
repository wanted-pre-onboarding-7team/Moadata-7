import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

import { IData } from '../type'
import { heartRateDB } from '../../DB'

dayjs.extend(isBetween)

const fetchMemberData = () => {
  const memberNumber = '136' // 파람스 값 바꿔주기
  return heartRateDB[`member${memberNumber}`]
}

const filterDataByRange = (select: string) => {
  const memberData = fetchMemberData()

  const today = dayjs('2022-02-26') // 회원 가입일로 바꿔주기
  const nextWeek = today.add(1, 'week')

  if (select === '시작일') {
    return memberData.filter((data) => today.isSame(data.crt_ymdt, 'day'))
  }

  if (select === '일주일') {
    return memberData.filter((data) => dayjs(data.crt_ymdt).isBetween(today, nextWeek, 'day', '[)'))
  }

  return memberData
}

const filerDataByLength = (data: IData[]) => {
  data.filter((_, index) => index % Math.floor(data.length / 50))
}

const getChartData = (rowData: IData[]) => {
  const chartData = rowData.map((data) => ({ x: data.crt_ymdt, y: data.avg_beat }))
  return chartData
}

const changeDateFormat = (dateValue: string, select: string) => {
  if (select === '시작일') return dateValue.split(' ')[1]

  return dateValue.split(' ').join('\n').slice(0, -3)
}

export { filterDataByRange, getChartData, changeDateFormat }

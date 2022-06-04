## 1. 데이터를 그래프에 쓸 수 있는 형태로 가공
- [x] 기존 데이터는 날짜별 시간순이 거꾸로 되어있어, 이를 시간순으로 정렬한 형태로 db객체 생성

```
// src/routes/ManageDetailPage/DB.ts 
const totalStepData: IStepDB = {
  member136: [getLastStepData([...StepData11]), getLastStepData([...StepData12]), getLastStepData([...StepData13])],
  member328: [getLastStepData([...StepData21]), getLastStepData([...StepData22]), getLastStepData([...StepData23])],
  member380: [getLastStepData([...StepData31]), getLastStepData([...StepData32]), getLastStepData([...StepData33])],
}

const sortByDate = (array: IHeartRateData[]) => {
  array.sort((a, b) => new Date(a.crt_ymdt).getTime() - new Date(b.crt_ymdt).getTime())

  return array
}
```

- [x] 빅토리js 차트에 사용할 수 있는 형태로 data 가공
 
 ```
 // src/routes/ManageDetailPage/HeartRate/utils.ts
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
```

## 2. 퀵버튼 구현

- [x] 기존 '오늘', '1주일', '전체'의 퀵버튼으로는 3일밖에 없는 주어진 data로, <br/>
버튼 클릭에 따라 다양한 그래프를 그려내지 못한다고 판단하여, <br/>
'오늘'을 각 회원가입 기준일으로 설정하고, 네이밍도 '시작일'로 변경

- [x] dayjs라이브러리의 add, isBetween, format 등의 메써드를 사용하여 날짜처리를 간소화

```
// src/routes/ManageDetailPage/HeartRate/utils.ts
const getDateRange = (select: string, userInfo: IUserInfo) => {
  const startDate = userInfo.crt_ymdt.split(' ')[0]
  let lastDate

  if (select === '시작일') lastDate = startDate
  if (select === '일주일') lastDate = dayjs(startDate).add(6, 'day').format('YYYY-MM-DD')
  if (select === '전체') lastDate = dayjs().format('YYYY-MM-DD')

  return [startDate, lastDate]
}
```

## 3. 심박수 평균 BPM 구하기

- [x] 가공된 심박수 데이터 중 BPM의 총 합을 reduce를 사용해서 구하고, 배열의 수만큼 
나누어 조회기간별 평균 BPM을 구해서 표출함

```
// src/routes/ManageDetailPage/HeartRate/utils.ts
const getAverageBPM = (select: string, userInfo: IUserInfo) => {
  const chartData = getChartData(select, userInfo)
  if (!chartData) return null

  const sumBPM = Number(chartData.reduce((sum, cur) => sum + cur.y, 0))
  const averageBPM = Math.floor(sumBPM / chartData.length)

  return `${averageBPM} BPM`
}
```

## 4. 그래프 커스텀

- [x] Victory js를 이용해서 그래프를 만듦. 스타일을 분리하여 관리.


- [x] 최종 렌더링 형태

<img src="https://velog.velcdn.com/images/wkqkel/post/054312d0-e76b-4ea9-bbcb-c657113c437e/image.png" width="400" height="400">


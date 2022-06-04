## 1. 심박수 데이터 정렬

심박수 데이터를 시간 오름차순으로 정렬해서, 그래프에 시간순으로 데이터를 시각화 함

처음에 reverse()를 사용해서 반전 시켜줬지만 배열이 반전되지 않아 문자열로 되어있던 date 

데이터를 날짜로 변경을 한 후, sort를 사용해서 데이터를 오름차순으로 배열 함

```tsx
const sortByDate = (array: IHeartRateData[]) => {
  array.sort((a, b) => new Date(a.crt_ymdt).getTime() - new Date(b.crt_ymdt).getTime())

  return array
}
```


## 2. 퀵버튼 구현
기존 '오늘', '1주일', '전체'의 퀵버튼으로는 3일밖에 없는 주어진 data로, <br/>
버튼 클릭에 따라 다양한 그래프를 그려내지 못한다고 판단하여, <br/>
'오늘'을 각 회원가입 기준일으로 설정하고, 네이밍도 '시작일'로 변경

사용자가 클릭한 버튼에 따라 시작일과 종료일을 설정하고, 이를 기준으로 데이터를 가공

dayjs라이브러리의 add, isBetween, format 등의 메써드를 사용하여 날짜처리를 간소화

## 3. 심박수 평균 BPM 구하기

가공된 심박수 데이터 중 BPM의 총 합을 reduce를 사용해서 구하고, 배열의 수만큼 

나누어 조회기간별 평균 BPM을 구해서 표출함

```tsx
 const sumBPM = Number(chartData.reduce((sum, cur) => sum + cur.y, 0))
  const averageBPM = Math.floor(sumBPM / chartData.length)
```

## 4. 그래프 커스텀

초기에 각자 Victory js를 이용해서 그래프를 그려보고, 어느정도 완성 될 때

그래프를 합쳐서 VScode share를 통해 공동으로 작업을 진행 하면서 기능까지 완성함

chart와 chartStyle파일을 분리해서 그래프와 스타일을 따로 관리함

심박수 그래프와 걸음수 그래프의 스타일 커스텀을 맡아 작업함

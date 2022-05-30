interface IHealthRateDB {
  [key: string]: IHeartRateData[]
}

interface IHeartRateData {
  seq: number
  member_seq: number
  avg_beat: number
  crt_ymdt: string
}

interface IChartData {
  x: string
  y: number
}

export type { IHealthRateDB, IHeartRateData, IChartData }

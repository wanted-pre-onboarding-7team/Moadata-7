interface IHealthRateDB {
  [key: string]: IData[]
}

interface IData {
  seq: number
  member_seq: number
  avg_beat: number
  crt_ymdt: string
}

export type { IHealthRateDB, IData }

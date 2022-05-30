interface IStepDB {
  [key: string]: IData[]
}

interface IData {
  seq: number
  member_seq: number
  steps: number
  minutes: number
  distance: number
  calorie: number
  crt_ymdt: string
}

interface IStepList {
  x: string
  y: number
  label: number
}

export type { IStepDB, IData, IStepList }

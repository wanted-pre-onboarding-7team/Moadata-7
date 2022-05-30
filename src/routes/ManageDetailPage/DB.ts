import HeartRateData12 from 'assets/data/heartrate_data/heartrate_136_0308_1.json'
import HeartRateData11 from 'assets/data/heartrate_data/heartrate_136_0226_1.json'
import HeartRateData13 from 'assets/data/heartrate_data/heartrate_136_0419_1.json'
import HeartRateData21 from 'assets/data/heartrate_data/heartrate_328_0416_2.json'
import HeartRateData22 from 'assets/data/heartrate_data/heartrate_328_0419_2.json'
import HeartRateData23 from 'assets/data/heartrate_data/heartrate_328_0420_2.json'
import HeartRateData31 from 'assets/data/heartrate_data/heartrate_380_0417_3.json'
import HeartRateData32 from 'assets/data/heartrate_data/heartrate_380_0418_3.json'
import HeartRateData33 from 'assets/data/heartrate_data/heartrate_380_0419_3.json'
import StepData12 from 'assets/data/step_data/step_136_0308_1.json'
import StepData11 from 'assets/data/step_data/step_136_0226_1.json'
import StepData13 from 'assets/data/step_data/step_136_0419_1.json'
import StepData21 from 'assets/data/step_data/step_328_0416_2.json'
import StepData22 from 'assets/data/step_data/step_328_0419_2.json'
import StepData23 from 'assets/data/step_data/step_328_0420_2.json'
import StepData31 from 'assets/data/step_data/step_380_0417_3.json'
import StepData32 from 'assets/data/step_data/step_380_0418_3.json'
import StepData33 from 'assets/data/step_data/step_380_0419_3.json'

import { IHealthRateDB, IHeartRateData } from './HeartRate/type'
import { IData, IStepDB } from './StepChart/type'

const getLastStepData = (arr: IData[]) => {
  const [data] = arr.sort((a, b) => b.seq - a.seq)
  return data
}

const division = (arr: IData[], divide: number) => {
  const newArray = arr.filter((i, idx) => idx % divide === 0)
  return newArray
}

const DailyStepDB: IStepDB = {
  member136: [...StepData11, ...StepData12, ...StepData13],
  member328: [...StepData21, ...StepData22, ...StepData23],
  member380: [...StepData31, ...StepData32, ...StepData33],
}

const RangeStepDB: IStepDB = {
  member136: [
    ...division(StepData11, 3),
    getLastStepData([...StepData11]),
    ...division(StepData12, 3),
    getLastStepData([...StepData12]),
    ...division(StepData13, 3),
    getLastStepData([...StepData13]),
  ],
  member328: [
    ...division(StepData21, 3),
    getLastStepData([...StepData21]),
    ...division(StepData22, 3),
    getLastStepData([...StepData22]),
    ...division(StepData23, 3),
    getLastStepData([...StepData23]),
  ],
  member380: [
    ...division(StepData31, 3),
    getLastStepData([...StepData31]),
    ...division(StepData32, 3),
    getLastStepData([...StepData32]),
    ...division(StepData33, 3),
    getLastStepData([...StepData33]),
  ],
}

const totalStepData: IStepDB = {
  member136: [getLastStepData([...StepData11]), getLastStepData([...StepData12]), getLastStepData([...StepData13])],
  member328: [getLastStepData([...StepData21]), getLastStepData([...StepData22]), getLastStepData([...StepData23])],
  member380: [getLastStepData([...StepData31]), getLastStepData([...StepData32]), getLastStepData([...StepData33])],
}

const sortByDate = (array: IHeartRateData[]) => {
  array.sort((a, b) => new Date(a.crt_ymdt).getTime() - new Date(b.crt_ymdt).getTime())

  return array
}

const heartRateDB: IHealthRateDB = {
  member136: sortByDate([...HeartRateData11, ...HeartRateData12, ...HeartRateData13]),
  member328: sortByDate([...HeartRateData21, ...HeartRateData22, ...HeartRateData23]),
  member380: sortByDate([...HeartRateData31, ...HeartRateData32, ...HeartRateData33]),
}

export { heartRateDB, DailyStepDB, RangeStepDB, totalStepData }

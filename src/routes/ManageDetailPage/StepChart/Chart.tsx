import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTheme, VictoryTooltip } from 'victory'
import { labelStyle } from '../HeartRate/HeartRateChart/chartStyle'
import { changeDateFormat } from '../HeartRate/utils'
import { IData, IStepDB, IStepList } from './type'

interface IProps {
  StepDataList: IStepList[]
  selectRange: string
}

const Chart = ({ StepDataList, selectRange }: IProps) => {
  if (!StepDataList) return null
  return (
    <VictoryChart theme={VictoryTheme.material} width={540} height={340}>
      <VictoryAxis
        dependentAxis
        offsetX={545}
        tickFormat={(x) => {
          return x.toLocaleString()
        }}
        tickCount={9}
        style={{
          axis: { stroke: 'transparent' },
          tickLabels: {
            fill: '#94A2AD',
            top: '4px',
          },
        }}
        tickLabelComponent={<VictoryLabel />}
      />
      <VictoryAxis
        tickCount={4}
        tickFormat={(x) => changeDateFormat(x, selectRange)}
        style={{
          tickLabels: {
            padding: 3,
            fill: '#b0b0b0',
          },
        }}
      />
      <VictoryLabel text='STEP' {...labelStyle.position} style={labelStyle.style} />
      <VictoryBar
        style={{
          data: { fill: ({ datum }) => (datum.index === StepDataList.length - 1 ? '#C5C5CC' : '#F84B0B') },
        }}
        labelComponent={<VictoryTooltip />}
        data={StepDataList}
      />
    </VictoryChart>
  )
}

export default Chart

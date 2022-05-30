import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTheme, VictoryTooltip } from 'victory'
import { IData, IStepDB, IStepList } from './type'

interface IProps {
  StepDataList: IStepList[]
}

const Chart = ({ StepDataList }: IProps) => {
  if (!StepDataList) return null
  return (
    <VictoryChart theme={VictoryTheme.material} width={450}>
      <VictoryAxis
        dependentAxis
        offsetX={460}
        tickFormat={(x) => {
          return x.toLocaleString()
        }}
        tickCount={7}
        style={{
          axis: { stroke: 'transparent' },
          tickLabels: { fill: '#94A2AD' },
        }}
        tickLabelComponent={<VictoryLabel dy={20} />}
      />
      <VictoryAxis tickCount={10} />
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

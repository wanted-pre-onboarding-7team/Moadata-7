import {
  createContainer,
  Line,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryCursorContainerProps,
  VictoryLabel,
  VictoryVoronoiContainerProps,
} from 'victory'
import { cursorLineStyle, labelStyle, chartStyle, barStyle, axisStyle1, axisStyle2 } from './chartStyle'
import { changeDateFormat } from '../HeartRate/utils'
import { IStepList } from './type'

interface IProps {
  StepDataList: IStepList[]
  selectRange: string
}

const Y_AXIS_TICK_VALUES = [3000, 6000, 9000, 12000, 15000, 18000]

const Chart = ({ StepDataList, selectRange }: IProps) => {
  const VictoryCursorVoronoiContainer = createContainer<VictoryVoronoiContainerProps, VictoryCursorContainerProps>(
    'voronoi',
    'cursor'
  )
  if (!StepDataList) return null
  return (
    <VictoryChart
      domainPadding={7}
      {...chartStyle.size}
      theme={chartStyle.theme}
      containerComponent={
        <VictoryCursorVoronoiContainer
          labels={({ datum }) => `${datum.y} STEP`}
          cursorComponent={<Line style={cursorLineStyle.style} />}
          cursorDimension='x'
        />
      }
    >
      <VictoryBar
        data={StepDataList}
        style={{
          data: { fill: ({ datum }) => (datum.index === StepDataList.length - 1 ? '#fdbb2d' : '#21cc9e') },
        }}
        animate={barStyle.animate}
        labelComponent={<VictoryLabel style={{ display: 'none' }} />}
      />
      <VictoryLabel text='STEP' {...labelStyle.position} style={labelStyle.style} />
      <VictoryAxis style={axisStyle1.style} dependentAxis tickValues={Y_AXIS_TICK_VALUES} />
      <VictoryAxis
        style={axisStyle2.style}
        tickCount={4}
        tickLabelComponent={<VictoryLabel dy={5} />}
        tickFormat={(x) => changeDateFormat(x, selectRange)}
      />
    </VictoryChart>
  )
}

export default Chart

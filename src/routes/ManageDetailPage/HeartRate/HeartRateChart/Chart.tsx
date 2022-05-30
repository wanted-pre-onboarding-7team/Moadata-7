import {
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryLabel,
  Line,
  createContainer,
  VictoryVoronoiContainerProps,
  VictoryCursorContainerProps,
} from 'victory'

import { getChartData, changeDateFormat } from '../utils'
import { IUserInfo } from 'routes/ManageDetailPage/state'

import { chartStyle, areaStyle, labelStyle, cursorLineStyle } from './chartStyle'

interface IProps {
  selectRange: string
  userInfo: IUserInfo
}

const Y_AXIS_TICK_VALUES = [30, 60, 90, 120, 150, 180]

const Chart = ({ selectRange, userInfo }: IProps) => {
  const chartData = getChartData(selectRange, userInfo)

  const VictoryCursorVoronoiContainer = createContainer<VictoryVoronoiContainerProps, VictoryCursorContainerProps>(
    'voronoi',
    'cursor'
  )

  if (!chartData) return null
  return (
    <VictoryChart
      style={{ background: { backgroundColor: 'yellow' } }}
      {...chartStyle.size}
      theme={chartStyle.theme}
      containerComponent={
        <VictoryCursorVoronoiContainer
          labels={({ datum }) => `${datum.y} BPM`}
          cursorComponent={<Line style={cursorLineStyle.style} />}
          cursorDimension='x'
        />
      }
    >
      <VictoryLabel text='BPM' {...labelStyle.position} style={labelStyle.style} />
      <VictoryArea data={chartData} interpolation='natural' animate={areaStyle.animation} />
      <VictoryAxis tickCount={7} tickFormat={(x) => changeDateFormat(x, selectRange)} />
      <VictoryAxis dependentAxis tickValues={Y_AXIS_TICK_VALUES} />
    </VictoryChart>
  )
}

export default Chart

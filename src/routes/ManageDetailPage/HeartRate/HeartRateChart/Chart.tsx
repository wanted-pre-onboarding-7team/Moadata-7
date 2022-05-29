import { log } from 'console'
import {
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryLabel,
  VictoryCursorContainer,
  Line,
  VictoryVoronoiContainer,
  VictoryGroup,
  createContainer,
  VictoryZoomContainerProps,
  VictoryVoronoiContainerProps,
} from 'victory'
import { chartStyle, labelStyle, areaStyle, cursorLineStyle } from './chartStyle'
import { changeDateFormat, filterDataByRange, getChartData } from './utils'

interface IProps {
  selectRange: string
}

const Y_AXIS_TICK_VALUES = [30, 60, 90, 120, 150]

const Chart = ({ selectRange }: IProps) => {
  const filteredDataByRange = filterDataByRange(selectRange)
  const chartData = getChartData(filteredDataByRange)
  const VictoryCursorVoronoiContainer = createContainer<VictoryZoomContainerProps, VictoryVoronoiContainerProps>(
    'cursor',
    'voronoi'
  )

  return (
    <VictoryChart
      {...chartStyle.size}
      theme={chartStyle.theme}
      containerComponent={<VictoryCursorVoronoiContainer labels={({ datum }) => datum.y} />}
    >
      <VictoryLabel text='BPM' {...labelStyle.position} style={labelStyle.style} />
      <VictoryArea data={chartData} interpolation='natural' animate={areaStyle.animation} />
      <VictoryAxis tickCount={7} tickFormat={(x) => changeDateFormat(x, selectRange)} />
      <VictoryAxis dependentAxis tickValues={Y_AXIS_TICK_VALUES} />
    </VictoryChart>
  )
}

export default Chart

/* <VictoryVoronoiContainer labels={({ datum }) => `y: ${datum.y}`} /> */

/* <VictoryCursorContainer cursorDimension='x' cursorComponent={<Line style={cursorLineStyle.style} />} /> */

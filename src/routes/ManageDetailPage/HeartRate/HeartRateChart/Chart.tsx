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

import { changeDateFormat } from '../utils'

import { chartStyle, areaStyle, labelStyle, cursorLineStyle } from './chartStyle'
import { IChartData } from '../type'

interface IProps {
  chartData: IChartData[] | null
  selectRange: string
}

const Y_AXIS_TICK_VALUES = [30, 60, 90, 120, 150, 180]

const Chart = ({ chartData, selectRange }: IProps) => {
  const VictoryCursorVoronoiContainer = createContainer<VictoryVoronoiContainerProps, VictoryCursorContainerProps>(
    'voronoi',
    'cursor'
  )

  if (!chartData) return null
  return (
    <div>
      <svg style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id='gradient' x1='50%' y1='50%' x2='50%' y2='100%'>
            <stop offset='0%' stopColor='#eeebff' />
            <stop offset='30%' stopColor='#f9f8ff' />
            <stop offset='95%' stopColor='#fff' />
          </linearGradient>
        </defs>
      </svg>
      <VictoryChart
        domainPadding={7}
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
        <VictoryAxis tickCount={6} tickFormat={(x) => changeDateFormat(x, selectRange)} />
        <VictoryAxis dependentAxis tickValues={Y_AXIS_TICK_VALUES} />
      </VictoryChart>
    </div>
  )
}

export default Chart

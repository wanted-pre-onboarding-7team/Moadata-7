import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTheme, VictoryTooltip } from 'victory'

import dayjs from 'dayjs'
import stepDataList from 'assets/data/step_data/step_136_0226_1.json'
import styles from './stepChart.module.scss'

const dailyStepData = stepDataList.reverse().map((item, idx) => {
  return {
    x: item.crt_ymdt,
    y: item.steps,
    index: idx,
    label: item.steps,
  }
})

const StepChart = () => {
  return (
    <div className={styles.chartWrap}>
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
        <VictoryAxis tickCount={2} />
        <VictoryBar
          style={{
            data: { fill: ({ datum }) => (datum.index === dailyStepData.length - 1 ? '#C5C5CC' : '#F84B0B') },
          }}
          labelComponent={<VictoryTooltip />}
          data={dailyStepData}
        />
      </VictoryChart>
    </div>
  )
}

export default StepChart

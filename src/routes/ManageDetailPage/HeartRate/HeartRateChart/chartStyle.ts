const COLORS = {
  BACKGROUND: 'rgba(245,73,16,0.1)',
  LINE: '#f54910',
  AXIS: '#383838',
  AXIS_LABEL: '#f54910',
  TICK_LABEL: '#b0b0b0',
}

const chartStyle = {
  size: { width: 640, height: 360 },

  theme: {
    area: {
      style: {
        data: { fill: COLORS.BACKGROUND, stroke: COLORS.LINE },
      },
    },
    axis: {
      style: {
        tickLabels: {
          fill: COLORS.TICK_LABEL,
          padding: 8,
        },
        grid: { stroke: 'none' },
        axis: { stroke: COLORS.AXIS },
      },
    },
    voronoi: {
      style: {
        labels: {
          padding: 5,
          fill: COLORS.LINE,
          pointerEvents: 'none',
        },
      },
    },
  },
}

const labelStyle = {
  position: {
    x: 16,
    y: 18,
  },

  style: {
    fill: COLORS.AXIS_LABEL,
  },
}

const areaStyle = {
  animation: {
    duration: 2000,
    onLoad: { duration: 1500 },
  },
}

const cursorLineStyle = {
  style: {
    stroke: 'red',
  },
}

export { chartStyle, labelStyle, areaStyle, cursorLineStyle }

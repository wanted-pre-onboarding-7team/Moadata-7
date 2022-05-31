const COLORS = {
  AREA: 'rgba(245,73,16,0.1)',
  AXIS: '#383838',
  LABEL: '#21cc9e',
  TICK_LABEL: '#b0b0b0',
  VORONOI_LABEL: '#383838',
  CURSOR_LINE: '#a0ffe5',
}

const chartStyle = {
  size: { width: 540, height: 340 },

  theme: {
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
          padding: 10,
          fill: COLORS.VORONOI_LABEL,
          pointerEvents: 'none',
        },
        flyout: {
          stroke: 'transparent',
          fill: 'transparent',
          pointerEvents: 'none',
        },
      },
    },
  },
}

const barStyle = {
  animate: {
    duration: 1000,
    onLoad: { duration: 500 },
  },
}

const cursorLineStyle = {
  style: {
    stroke: COLORS.CURSOR_LINE,
    strokeWidth: 2,
    strokeDasharray: '10 5',
  },
}

const labelStyle = {
  position: {
    x: 10,
    y: 18,
  },
  style: {
    fill: COLORS.LABEL,
    fontSize: '18px',
    fontWeight: 'bold',
  },
}

const axisStyle1 = {
  style: {
    tickLabels: {
      fill: '#b0b0b0',
      top: '1px',
    },
  },
}

const axisStyle2 = {
  style: {
    tickLabels: {
      padding: 3,
      fill: '#b0b0b0',
    },
    padding: {
      top: 20,
      bottom: 80,
    },
  },
}

export { chartStyle, labelStyle, cursorLineStyle, barStyle, axisStyle1, axisStyle2 }

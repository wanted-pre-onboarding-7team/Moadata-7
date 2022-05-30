const COLORS = {
  AREA: 'rgba(245,73,16,0.1)',
  AREA_LINE: '#f54910',
  AXIS: '#383838',
  LABEL: '#f54910',
  TICK_LABEL: '#b0b0b0',
  VORONOI_LABEL: '#fefefe',
  CURSOR_LINE: 'red',
}

const chartStyle = {
  size: { width: 540, height: 340 },

  theme: {
    area: {
      style: {
        data: { fill: COLORS.AREA, stroke: COLORS.AREA_LINE },
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
          padding: 15,
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

const labelStyle = {
  position: {
    x: 16,
    y: 18,
  },

  style: {
    fill: COLORS.LABEL,
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
    stroke: COLORS.CURSOR_LINE,
  },
}

export { chartStyle, labelStyle, areaStyle, cursorLineStyle }

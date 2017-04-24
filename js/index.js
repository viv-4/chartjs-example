const colours = [
  'rgba(75,192,192,0.3)',
  'rgba(75,75,192,0.3)',
  'rgba(75,192,75,0.3)',
  'rgba(192,75,75,0.3)',
  'rgba(192,192,75,0.3)',
  'rgba(192,75,192,0.3)',
  'rgba(75,117,75,0.3)',
]

const labels = ["January", "February", "March", "April", "May", "June", "July"] 
const data1 = [65, 20, 80, 10, 56, 55, 15]
const data2 = [45, 87, 65, 14, 30, 98, 50]

// Global Chart Defaults
Chart.defaults.scale.ticks.beginAtZero = true

// Pie Chart
const pieChartCanvas = document.getElementById('pieChartCanvas')
let pieChart = new Chart(pieChartCanvas, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [
      {
        backgroundColor: colours,
        borderColor: '#303030',
        data: data1
      }
    ]
  },
  options: {
    animation: {
      animateScale: true
    }
  }
})

// doughnut Chart
const doughnutChartCanvas = document.getElementById('doughnutChartCanvas')
let doughnutChart = new Chart(doughnutChartCanvas, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [
      {
        backgroundColor: colours,
        borderColor: '#303030',
        data: data1
      }
    ]
  },
  options: {
    cutoutPercentage: 70,
    animation: {
      animateScale: true
    }
  }
})

// Polar Chart
const polarAreaChartCanvas = document.getElementById('polarAreaChartCanvas')
let polarAreaChart = new Chart(polarAreaChartCanvas, {
  type: 'polarArea',
  data: {
    labels: labels,
    datasets: [
      {
        backgroundColor: colours,
        borderColor: '#303030',
        data: data1
      }
    ]
  },
  options: {
    animation: {
      animateRotate: false
    },
    scale: {
      ticks: {
        backdropColor: '#303030'
      }
    }
  }
})

// Radar Chart
const radarChartCanvas = document.getElementById('radarChartCanvas')
let radarChart = new Chart(radarChartCanvas, {
  type: 'radar',
  data: {
    labels: labels,
    datasets: [
      {
        label: "Data 1",
        fill: true,
        backgroundColor: colours[0],
        borderWidth: 2,
        borderColor: "rgba(75,192,192,1)",
        data: data1
      },
      {
        label: "Data 2",
        fill: true,
        backgroundColor: colours[1],
        borderWidth: 2,
        borderColor: "rgba(75,75,192,1)",
        data: data2
      }
    ]
  },
  options: {
    animation: {
      animateRotate: false
    },
    scale: {
      ticks: {
        backdropColor: '#303030'
      }
    }
  }
})

// Bar Chart
const barChartCanvas = document.getElementById('barChartCanvas')
let barChart = new Chart(barChartCanvas, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: "Data 1",
        fill: false,
        backgroundColor: colours[0],
        borderWidth: 1,
        borderColor: "rgba(75,192,192,1)",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        data: data1
      },
      {
        label: "Data 2",
        fill: true,
        backgroundColor: colours[1],
        borderWidth: 1,
        borderColor: "rgba(75,75,192,1)",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        data: data2
      }
    ]
  }
})

const lineChartCanvas = document.getElementById('lineChartCanvas')
let lineChart = new Chart(lineChartCanvas, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: "Data 1",
        fill: false,
        lineTension: 0.1,
        backgroundColor: colours[0],
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data1,
        spanGaps: false,
      },
      {
        label: "Data 2",
        fill: true,
        lineTension: 0.1,
        backgroundColor: colours[1],
        borderColor: "rgba(75,75,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,75,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,75,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data2,
        spanGaps: false,
      }
    ]
  }
})

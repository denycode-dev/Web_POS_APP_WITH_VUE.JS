<script>
// Importing Line class from the vue-chartjs wrapper
import {
  Line
} from 'vue-chartjs'

// Exporting this so it can be used in other components
export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        // Data to be represented on x-axis
        labels: ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '   ', '   '],
        datasets: [{
          label: 'this month',
          backgroundColor: 'transparent',
          // pointBackgroundColor: 'white',
          borderColor: '#FFB8C6',
          borderWidth: 3,
          // pointBorderColor: 'rgba(171, 71, 188, 1)',
          // Data to be represented on y-axis
          data: [40, 20, 30, 50, 90, 60, 20, 40, 50, 70, 90, 10]
        },
        {
          label: 'last month',
          backgroundColor: 'transparent',
          // pointBackgroundColor: 'white',
          borderColor: '#00F1FF',
          borderWidth: 3,
          // pointBorderColor: 'rgba(171, 71, 188, 1)',
          // Data to be represented on y-axis
          data: [40, 30, 60, 50, 80, 40, 70, 40, 50, 70, 50, 30]
        }
        ]
      },
      // Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    // renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
</script>

<script>
import {
  Line
} from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        labels: ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '   ', '   '],
        datasets: [{
          label: 'this month',
          backgroundColor: 'transparent',
          borderColor: '#FFB8C6',
          borderWidth: 3,
          data: [40, 20, 30, 50, 90, 60, 20, 40, 50, 70, 90, 10]
        },
        {
          label: 'last month',
          backgroundColor: 'transparent',
          borderColor: '#00F1FF',
          borderWidth: 3,
          data: [40, 30, 60, 50, 80, 40, 70, 40, 50, 70, 50, 30]
        }
        ]
      },
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
    this.renderChart(this.datacollection, this.options)
  }
}
</script>

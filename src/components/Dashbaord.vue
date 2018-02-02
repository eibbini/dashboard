<template>
  <div>
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div class="center-charts">
      <div>
        <canvas id="chart1" width="400" height="400"></canvas>
      </div>
      <div>
        <canvas id="chart2" width="400" height="400"></canvas>
      </div>
      <div>
        <canvas id="chart3" width="400" height="400"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import planetChartData from './../chart-data.js';
import promise from './../functions.js';


export default {
  extends: Bar,
  mounted () {
  // Promise chain to draw charts as per priority (line, bar, pie)
  this.createChart('chart1', this.planetChartData, 'line')
    .then(result => {
      this.createChart('chart2', this.planetChartData, 'bar')
        .then(result => {
          this.createChart('chart3', this.planetChartData, 'pie');
        })
    })
    .catch(err => {
      console.log('error', err);
      throw err;
    });

  },
  name: 'dashboard',
  data() {
    return {
      title: 'Dashboard',
      planetChartData: planetChartData
    }
  },
  methods: {
  createChart(chartId, chartData, chartType) {
    return new Promise(function(resolve, reject) {
      // callback if animation is not complete
      setTimeout(
      (function() {
        let isComplete;
          chartData.options.animation = {
            onComplete : function(){
              isComplete = true;
              resolve(isComplete, null);
            }
          };
          const ctx = document.getElementById(chartId);
          const drawChart = new Chart(ctx, {
            type: String(chartType),
            data: chartData.data,
            options: chartData.options,
           });
       })(),5)
  })
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

.center-charts {
  display:inline-block
}
</style>

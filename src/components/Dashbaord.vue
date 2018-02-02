<template>
  <div class="hello">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div style="display:inline-block;">
      <div style="width:50%; display:inline;">
        <canvas id="chart1" width="400" height="400"></canvas>
      </div>
      <div style="width:50%; display:inline;">
        <canvas id="chart2" width="400" height="400"></canvas>
      </div>
      <div style="width:50%; display:inline;">
        <canvas id="chart3" width="400" height="400"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
// CommitChart.js
import { Bar } from 'vue-chartjs'
import planetChartData from './../chart-data.js';
import promise from './../functions.js';


export default {
  extends: Bar,
  mounted () {
    // // Overwriting base render method with actual data.
    // this.renderChart(data, options)
    promise.then(result => {
      this.createChart('chart1', this.planetChartData, 'line');
      console.log(1);
    })
    .then(result => {
      console.log(2);
      this.createChart('chart2', this.planetChartData, 'bar');
    })
    .then(result => {
      this.createChart('chart3', this.planetChartData, 'pie');
      console.log(3);
    })
    .catch(err => {
      console.log('error', err);
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
    const ctx = document.getElementById(chartId);
    const myChart1 = new Chart(ctx, {
      type: String(chartType),
      data: chartData.data,
      options: chartData.options,
    });
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

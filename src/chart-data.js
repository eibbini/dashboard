export const planetChartData = {
   type: 'bar',
  // type: ['line','doughnut','bar'],
  // data: {
  //   labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
  //   datasets: [
  //     { // one line graph
  //       label: 'Number of Moons',
  //       data: [0, 0, 1, 2, 67, 62, 27, 14],
  //       backgroundColor: [
  //         'rgba(54,73,93,.5)', // Blue
  //         'rgba(54,73,93,.5)',
  //         'rgba(54,73,93,.5)',
  //         'rgba(54,73,93,.5)',
  //         'rgba(54,73,93,.5)',
  //         'rgba(54,73,93,.5)',
  //         'rgba(54,73,93,.5)',
  //         'rgba(54,73,93,.5)'
  //       ],
  //       borderColor: [
  //         '#36495d',
  //         '#36495d',
  //         '#36495d',
  //         '#36495d',
  //         '#36495d',
  //         '#36495d',
  //         '#36495d',
  //         '#36495d',
  //       ],
  //       borderWidth: 3
  //     },
  //     { // another line graph
  //       label: 'Planet Mass (x1,000 km)',
  //       data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
  //       backgroundColor: [
  //         'rgba(71, 183,132,.5)', // Green
  //       ],
  //       borderColor: [
  //         '#47b784',
  //       ],
  //       borderWidth: 3
  //     }
  //   ]
  // },
  // options: {
  //   responsive: true,
  //   lineTension: 1,
  //   scales: {
  //     yAxes: [{
  //       ticks: {
  //         beginAtZero: true,
  //         padding: 25,
  //       }
  //     }]
  //   }
  // }
  data: {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
},
options: {
  responsive: false,
  lineTension: 1,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        padding: 25,
      }
    }],
    xAxes:[]
  }
}
}
export default planetChartData;

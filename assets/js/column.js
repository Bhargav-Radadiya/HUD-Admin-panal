new Vue({
  el: "#app",
  components: {
    apexchart: VueApexCharts
  },
  data: {
    dates: [
      "2019-01",
      "2019-02",
      "2019-03",
      "2019-04",
      "2019-05",
      "2019-06",
      "2019-07",
      "2019-08",
      "2019-09",
      "2019-10",
      "2019-11",
      "2019-12"
    ],

    series: [
      {
        name: "Desktops",
        data: [440, 505, 414, 671, 227, 413, 332, 543, 543, 112, 321, 122]
      }
    ]
  },

  computed: {
    chartOptions: function () {
      return {
        chart: {
          width: 700,
          id: "my-chart"
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.dates,
          type: "datetime",
          labels: {
            
          }
        }
      };
    }
  },
  methods: {}
});


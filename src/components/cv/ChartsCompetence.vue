<template>
  <div class="chart">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "ChartsCompentence",
  data() {
    return {
      newChart: null,
      competenceData: {
        type: "bar",
        data: {
          labels: [
            "HTML",
            "CSS",
            "JavaScript",
            "VueJs",
            "Angular",
            "Quasar",
            "Git",
            "Bulma",
            "NodeJs",
            "SQL",
            "Java",
            "PHP",
            "Symfony",
          ],
          datasets: [
            {
              data: [70, 60, 70, 65, 50, 40, 75, 80, 70, 70, 40, 60, 70],
              backgroundColor: [
                " rgb(230 76 34 / 80%)",
                "rgb(33 100 241 / 80%)",
                "rgb(255 215 56 / 80%)",
                "rgb(64 185 132 / 80%)",
                "rgb(66 165 245 / 80%)",
                "rgb(240 80 48 / 80%)",
                "rgb(1 209 178 / 80%)",
                "rgb(2 121 214 / 80%)",
                "rgb(235 100 103 / 80%)",
                " rgb(230 76 34 / 80%)",
                "rgb(64 185 132 / 80%)",
                "rgb(110 65 205 / 80%)",
                "rgb(33 100 241 / 80%)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          categoryPercentage: 1,
          barPercentage: 0.6,
          indexAxis: "y",
          plugins: {
            title: {
              display: false,
              text: "Competences",
            },
            legend: {
              display: false,
              position: "bottom",
            },
          },

          lineTension: 1,
          scales: {
            x: {
              ticks: {
                font: {
                  size: 14,
                },
              },
              suggestedMax: 100,
              grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
                drawTicks: false,
              },
            },
            y: {
              ticks: {
                font: {
                  size: 16,
                },
                padding: 20,
              },
              grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
                drawTicks: false,
              },
            },
          },
        },
      },
    };
  },
  methods: {
    chartOfCompetences: function () {
      const ctx = document.getElementById("myChart");
      this.newChart = new Chart(ctx, this.competenceData);
    },
  },
  mounted() {
    this.chartOfCompetences();
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .chart {
    max-width: 320px;
  }
}
.chart {
  height: 45vh;
  width: 40vw;
  position: relative;
  margin: auto;
}
</style>

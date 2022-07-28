<template>
  <div id="content">
    <h1 id="title-page">Supervisor(a) - {{ supervisor }}</h1>
    <div id="content-page">
      <div id="teste">
        <canvas id="myChart"></canvas>
      </div>

    </div>
  </div>
</template>

<script>

import Cookie from "js-cookie";
import {AXIOS} from "../../../../services/api.ts";
import Chart from 'chart.js/auto';


export default {
  name: "SupervisorDashboard",
  components: {
  },
  props: {
    supervisor: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      vendors: {},
    }
  },
  methods: {
    getDataSupervisor: function () {
      AXIOS({
        method: 'GET',
        url: 'data_items/supervisor_data',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        },
        params: {
          supervisor: this.supervisor
        }
      }).then((res) => {
        this.vendors = res.data
      }).catch((error) => {
        console.log(error)
      })
    },
    graphBar: function () {
      const ctx = document.getElementById('myChart');
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive:true,
          maintainAspectRatio: false
        }
      });
      return myChart
    }
  },
  mounted() {
    this.getDataSupervisor()
    this.graphBar()
  }
}

</script>

<style scoped lang="scss">


</style>
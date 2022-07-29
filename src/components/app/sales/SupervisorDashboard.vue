<template>
  <div id="content">
    <h1 id="title-page">Supervisor(a) - {{ supervisor }}</h1>
    <div id="content-page">
      <div class="cards">
        <div class="card">
          <span>Total de vendedores</span>
          <canvas id="pizza"></canvas>
        </div>
        <div class="card">
          <span>Total de vendedores</span>
          <canvas id="myChart"></canvas>
        </div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

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
      graph: {
        bar: {
          data: null,
          label: null
        },
        pie: {
          data: null,
          label: null
        }
      }
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
    getAmount: function () {
      AXIOS({
        method: 'GET',
        url: 'data_items/supervisor_amount',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        }
      }).then((res) => {
        this.graph.bar.data = res.data.amount
        this.graph.bar.label = res.data.month
        this.graphBar()
      }).catch((error) => {
        console.log(error)
      })
    },
    getTeam: function () {
      AXIOS({
        method: 'GET',
        url: 'data_items/supervisor_team',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        }
      }).then((res) => {
        console.log(res)
      })
    },
    graphBar: function () {

      const mesArray = this.graph.bar.label
      const ctx = document.getElementById('myChart');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: mesArray,
          datasets: [{
            label: 'Receita R$',
            data: this.graph.bar.data,
            backgroundColor: [
              '#0f297d'
            ],
            borderColor: [
              '#0f297d'
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
    },
    graphPizza: function () {

      const ctx2 = document.getElementById('pizza');

      const pizza = new Chart(ctx2, {
        type: 'pie',
        data: {
          labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [1,2,3,4,6],
              backgroundColor: [
                  '#0f297d'
              ] ,
            }
          ]
        },
        options: {
          responsive:true,
          maintainAspectRatio: false
        }
      });
      return pizza
    }

  },
  created() {
    this.getAmount()
  },
  mounted() {
    this.getDataSupervisor()
    this.getTeam()
    this.graphPizza()
  }
}

</script>

<style scoped lang="scss">

#content-page{
  background-color: $background !important;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 30%;
  grid-template-areas: 'S S S S';
  gap: 10px;


  .cards {
    margin-top: 2vh;
    background-color: $background;;
    grid-area: S;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 100%;
    padding: 10px;
    gap: 5rem;

    .card {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
      padding: 2vh 1vw;
    }
  }
}

</style>
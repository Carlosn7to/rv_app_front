<template>
  <div id="content">
    <h1 id="title-page">Supervisor(a) - {{ supervisor }}</h1>
    <div id="content-page">

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
        this.graph.pie.data = res.data
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
          labels: ['Ativo', 'Inativo'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [12,16],
              backgroundColor: [
                  'green',
                  'red'
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
  }
}

</script>

<style scoped lang="scss">

#content-page{
  background-color: $background !important;

}

</style>
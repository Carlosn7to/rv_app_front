<template>
  <div id="container">
    <MenuMain/>
    <div id="content">
      <h1 id="title-page">Extrato financeiro - Supervisores</h1>
      <div id="content-page">
        <div id="list-collaborators">
          <table>
            <thead>
              <tr>
                <th>Canal</th>
                <th>Nome</th>
                <th>Vendas</th>
                <th>Meta</th>
                <th>% Atingido</th>
                <th>Cancelados</th>
                <th>Estrelas</th>
                <th>Preço da estrela</th>
                <th>Comissão</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sup in supervisors" :key="sup.name">
                <td>{{ sup.channel }}</td>
                <td>{{ sup.name }}</td>
                <td>{{ sup.qntd_plans }}</td>
                <td>{{ sup.meta }}</td>
                <td>{{ sup.percent_meta }}</td>
                <td>{{ sup.cancelled }}</td>
                <td>{{ sup.stars }}</td>
                <td>R${{ sup.price_stars }}</td>
                <td>R${{ sup.comission }}</td>
                <td><i class="fi fi-rr-users-alt"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import MenuMain from "@/components/app/MenuMain";
import {AXIOS} from "../../../../services/api.ts";
import Cookie from "js-cookie";

export default {
  name: "ReportFinancial",
  components: {
    MenuMain
  },
  data () {
    return {
      supervisors: {}
    }
  },
  methods: {
    getRvSupervisors: function () {

      AXIOS({
        method: 'GET',
        url: 'rv/supervisors',
        headers: {
          'Authorization': 'Bearer'+Cookie.get('rv_token')
        }
      }).then((res) => {
        this.supervisors = res.data
      }).catch((error) => {
        console.log(error)
      })

    }
  },
  mounted() {
    this.getRvSupervisors()
  }
}
</script>

<style scoped lang="scss">

#container {
  #content {
    #content-page {
      #list-collaborators {
        @include container(100%, 95%, 2vh 1vw, #fff);
        @include flex(row, initial, initial, 20px);
        border-radius: 10px;

        table {
          @include table;
          height: 80vh;

          th, td {
            text-align: center;
          }

          th:nth-child(2), td:nth-child(2) {
            width: 30%;
            text-align: left;
          }
        }
      }
    }
  }
}

</style>
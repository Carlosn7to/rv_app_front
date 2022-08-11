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
                <th>Valor da estrela</th>
                <th>Comissão</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sup in supervisors" :key="sup.name">
                <td>{{ sup.channel }}</td>
                <td><b>{{ sup.name }}</b></td>
                <td>
                  <span :class="{ 'success' : sup.percent_meta > 70 && sup.price_stars > 0,
                                  'failure' : sup.percent_meta > 40 && sup.price_stars === 0,
                                  'ext-success' : sup.percent_meta > 90 && sup.price_stars > 0}">
                    <b>{{ sup.qntd_plans }}</b>
                  </span>
                </td>
                <td>{{ sup.meta }}</td>
                <td>
                  <span :class="{ 'success' : sup.percent_meta > 70 && sup.price_stars > 0,
                                  'failure' : sup.percent_meta > 40 && sup.price_stars === 0,
                                  'ext-success' : sup.percent_meta > 90 && sup.price_stars > 0}">
                    <b>{{ sup.percent_meta }}%</b>
                  </span>
                </td>
                <td>{{ sup.cancelled }}</td>
                <td>
                  <span :class="{ 'stars' : sup.price_stars > 0 }">
                    <b>
                      {{ sup.stars }}
                    </b>
                  </span>
                </td>
                <td>
                  <span :class="{ 'stars' : sup.price_stars > 0 }">
                    <b>
                      R${{ sup.price_stars }}
                    </b>
                  </span>
                </td>
                <td>
                  <span :class="{ 'success' : sup.percent_meta > 60 && sup.price_stars > 0,
                                  'failure' : sup.percent_meta > 40 && sup.price_stars === 0,
                                  'ext-success' : sup.percent_meta > 90 && sup.price_stars > 0}">
                    <b>R${{ sup.comission }}</b>
                  </span>
                </td>
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

          td {
            font-weight: 400 !important;
            color: $text-menu !important;

            .span {
              padding: 3px 15px;
              color: #fff;
              border-radius: 3px;
            }

            .success {
              @extend .span;
              background-color: #93ec90;
            }

            .sales {
              @extend .span;
              background-color: #909dec;
            }

            .stars {
              @extend .span;
              background-color: rgba(254, 202, 29, 0.71);
            }

            .failure {
              @extend .span;
              background-color: #f89090;
            }

            .ext-failure {
              @extend .span;
              background-color: #f34141;
            }

            .ext-success {
              @extend .span;
              background-color: #3ce03d;
            }
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
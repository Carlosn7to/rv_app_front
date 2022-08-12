<template>
  <div id="container">
    <MenuMain/>
    <div id="content" v-if="page === 'supervisors'">
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
                <th>Cancelados D -7</th>
                <th>SVAS - Estrelas</th>
                <th>Estrelas</th>
                <th>Valor da estrela</th>
                <th>Deflator</th>
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
                <td>{{ sup.svas }}</td>
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
                  <b>
                    {{ sup.deflactor }}%
                  </b>
                </td>
                <td>
                  <span :class="{ 'success' : sup.percent_meta > 60 && sup.price_stars > 0,
                                  'failure' : sup.percent_meta > 40 && sup.price_stars === 0,
                                  'ext-success' : sup.percent_meta > 90 && sup.price_stars > 0}">
                    <b>R${{ sup.comission }}</b>
                  </span>
                </td>
                <td>
                  <i class="fi fi-rr-users-alt" @click="getRvVendors(sup.name)"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="content" v-if="page === 'vendors'">
      <div class="title">
        <i class="fi fi-sr-angle-left" @click="getRvSupervisors"></i>
        <h1 id="title-page">Extrato financeiro - {{ supervisor.name }}</h1>
      </div>
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
              <th>SVAS - Estrelas</th>
              <th>Estrelas</th>
              <th>Valor da estrela</th>
              <th>Deflator</th>
              <th>Comissão</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="sup in supervisor.vendors" :key="sup.name">
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
              <td>{{ sup.svas }}</td>
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
                <b>
                  {{ sup.deflactor }}%
                </b>
              </td>
              <td>
                  <span :class="{ 'success' : sup.percent_meta > 60 && sup.price_stars > 0,
                                  'failure' : sup.percent_meta > 40 && sup.price_stars === 0,
                                  'ext-success' : sup.percent_meta > 90 && sup.price_stars > 0}">
                    <b>R${{ sup.comission }}</b>
                  </span>
              </td>
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
      supervisors: {},
      page: 'supervisors',
      supervisor: {
        name: '',
        vendors: {}
      }
    }
  },
  methods: {
    getRvSupervisors: function () {

      this.page = 'supervisors'

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

    },
    getRvVendors: function (sup) {
      this.page = 'vendors'
      this.supervisor.name = sup

      AXIOS({
        method: 'GET',
        url: 'rv/vendors',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        },
        params: {
          supervisor: this.supervisor.name
        }
      }).then((res) => {
        this.supervisor.vendors = res.data
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

    .title {
      @include flex(row, flex-start, center, 5px);

      i {
        font-size: 2rem;
        color: $text;
        @include transtion;
        cursor: pointer;

        &:hover {
          color: $age-orange;
        }
      }
    }
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
            width: 20%;
            text-align: left;
              b {
                user-select: text !important;
              }
          }

          th:nth-child(5), td:nth-child(5), th:nth-child(11), td:nth-child(11) {
            width: 10%;
          }

          td:nth-child(12) {
            i {
              font-size: 1.6rem;
              cursor: pointer;
              @include transtion;

              &:hover {
                color: $age-orange;
              }
            }
          }
        }
      }
    }
  }
}

</style>
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
                                  'ext-success' : sup.percent_meta > 90 && sup.price_stars > 0}"
                        @click="getSales(sup.name,
                                          sup.qntd_plans,
                                          sup.meta,
                                          sup.percent_meta,
                                          sup.stars,
                                          sup.price_stars,
                                          sup.deflactor,
                                          sup.comission)"
                        style="cursor: pointer">
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
                                  'ext-success' : sup.percent_meta > 90 && sup.price_stars > 0}"
                        @click="getSalesVendors(sup.name,
                                          sup.qntd_plans,
                                          sup.meta,
                                          sup.percent_meta,
                                          sup.stars,
                                          sup.price_stars,
                                          sup.deflactor,
                                          sup.comission)"
                        style="cursor: pointer">
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
  <div id="modal" v-if="modal.status === true">
    <div id="card-modal">
      <CloseButton
        @close-page="closeModal()"
      />
      <div id="content-card">
        <h6>{{ modal.name }}</h6>
        <div id="items-dashboard">
          <div class="item-dashboard">
            <h6>Vendas</h6>
            <span>{{ modal.details.sales }}</span>
          </div>
          <div class="item-dashboard">
            <h6>Meta</h6>
            <span>{{ modal.details.meta }}</span>
          </div>
          <div class="item-dashboard">
            <h6>Porcentagem meta</h6>
            <span>{{ modal.details.percent_meta }}%</span>
          </div>
          <div class="item-dashboard">
            <h6>Estrelas</h6>
            <span>{{ modal.details.stars }}</span>
          </div>
          <div class="item-dashboard">
            <h6>Valor da estrela</h6>
            <span>R${{ modal.details.price_stars }}</span>
          </div>
          <div class="item-dashboard">
            <h6>Deflator</h6>
            <span>{{ modal.details.deflactor }}%</span>
          </div>
          <div class="item-dashboard">
            <h6>Comissão</h6>
            <span>R${{ modal.details.comission }}</span>
          </div>
        </div>
        <div id="panel-dashboard">
          <div class="panel">
            <h6>Planos vendidos</h6>
            <p v-for="sale in modal.sales" :key="sale.plano">
              {{ sale.plano }}- <b>{{ sale.qntd }} venda(s)</b>
            </p>
          </div>
          <div class="panel">
            <h6>Tabela de estrelas</h6>
            <p>
              Plano residencial 120Mbps: <b>5 estrelas</b>
            </p>
            <p>
              Plano residencial 240Mbps: <b>9 estrelas</b>
            </p>
            <p>
              Plano residencial 400Mbps: <b>15 estrelas</b>
            </p>
            <p>
              Plano residencial 480Mbps: <b>15 estrelas</b>
            </p>
            <p>
              Plano residencial 720Mbps: <b>25 estrelas</b>
            </p>
            <p>
              Plano residencial 740Mbps: <b>25 estrelas</b>
            </p>
            <p>
              Plano residencial 960Mbps: <b>35 estrelas</b>
            </p>
            <p>
              Plano empresarial 600Mbps: <b>9 estrelas</b>
            </p>
            <p>
              Plano empresarial 800Mbps: <b>17 estrelas</b>
            </p>
            <p>
              Plano empresarial 1Gbps: <b>35 estrelas</b>
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import MenuMain from "@/components/app/MenuMain";
import {AXIOS} from "../../../../services/api.ts";
import Cookie from "js-cookie";
import CloseButton from "@/components/app/_aux/CloseButton";

export default {
  name: "ReportFinancial",
  components: {
    MenuMain,
    CloseButton
  },
  data () {
    return {
      supervisors: {},
      page: 'supervisors',
      supervisor: {
        name: '',
        vendors: {}
      },
      modal: {
        status: false,
        name: '',
        details: {
          sales: null,
          meta: null,
          percent_meta: null,
          stars: null,
          price_stars: null,
          deflactor: null,
          comission: null,
        },
        sales: {}
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

    },
    getSales: function (name, sales, meta, percent, stars, price, deflactor, comission) {
      this.modal.status = true
      this.modal.name = name
      this.modal.details.sales = sales
      this.modal.details.meta = meta
      this.modal.details.percent_meta = percent
      this.modal.details.stars = stars
      this.modal.details.price_stars = price
      this.modal.details.deflactor = deflactor
      this.modal.details.comission = comission

      AXIOS({
        method: 'GET',
        url: 'rv/supervisors/sales',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        },
        params: {
          supervisor: name
        }
      }).then((res) => {
        this.modal.sales = res.data
      })

    },
    getSalesVendors: function (name, sales, meta, percent, stars, price, deflactor, comission) {
      this.modal.status = true
      this.modal.name = name
      this.modal.details.sales = sales
      this.modal.details.meta = meta
      this.modal.details.percent_meta = percent
      this.modal.details.stars = stars
      this.modal.details.price_stars = price
      this.modal.details.deflactor = deflactor
      this.modal.details.comission = comission

      AXIOS({
        method: 'GET',
        url: 'rv/vendors/sales',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        },
        params: {
          vendor: name
        }
      }).then((res) => {
        this.modal.sales = res.data
      })

    },
    closeModal: function () {
      this.modal.status = false
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

#modal {
  #card-modal {
    width: 90vw;
    height: 95vh;

    #content-card {
      width: 100%;
      height: 90%;
      padding: 10px 2vw;

      h6 {
        font-size: 2rem;
      }

      #items-dashboard {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;

        .item-dashboard {
          width: calc(100% / 8);
          border-radius: 5px;
          box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: center;
          padding: 1.2vh 1vw;

          h6 {
            font-size: 1rem;
            color: $text;
          }

          span {
            font-size: 2rem;
            color: $text-menu;
          }
        }
      }

      #panel-dashboard {
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 10px;


        .panel {
          box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
          width: calc(100% / 3);
          height: 100%;
          border-radius: 5px;
          overflow-y: auto !important;

          h6 {
            text-align: center;
            padding: 1vh 0;
            font-size: 2rem;
            color: $text;
          }

          p {
            font-size: 1rem;
            color: $text;
            padding: 1vh 1vw;
            border-bottom: 1px solid #cccccc60;

            b {
              font-size: 1rem;
            }
          }

        }
      }
    }
  }
}

</style>
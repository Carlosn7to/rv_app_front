<template>
  <div id="container">
    <div id="content">
      <div id="header-dashboard">
        <h1 id="title-page">Dashboard - {{ collaborator.name }}</h1>
        <i class="fi fi-rr-cross-small" @click="closePage"></i>
      </div>
      <div id="content-page">
        <div id="sales">
          <div id="dashboards">
            <div class="dashboard" style="background: #FEA11D;">
              <div>
                <span>{{ dashboard.stars.value }}</span>
                <h6>Estrelas</h6>
              </div>
              <i class="fi fi-ss-star"></i>
            </div>
            <div class="dashboard" style="background-color: #009688">
              <div>
                <span>{{ dashboard.sales.count }}</span>
                <h6>Vendas válidas</h6>
              </div>
              <i class="fi fi-ss-rocket-lunch"></i>
            </div>
            <div class="dashboard" style="background-color: #3F51B5">
              <div>
                <span>{{ dashboard.plan.name }}</span>
                <h6>Top plano</h6>
              </div>
              <i class="fi fi-ss-shopping-cart-check"></i>
            </div>
            <div class="dashboard" style="background-color: #F44336">
              <div>
                <span>{{ dashboard.cancel }}</span>
                <h6>Cancelamentos</h6>
              </div>
              <i class="fi fi-ss-delete-document"></i>
            </div>
          </div>
          <div id="dashboards">
            <div class="dashboard" style="background: rgba(0,150,2,0.85);">
              <div>
                <span>R${{ dashboard.stars.amount }}</span>
                <h6>Comissão</h6>
              </div>
              <i class="fi fi-sr-sack-dollar"></i>
            </div>
            <div class="dashboard" style="background-color: #feca1d">
              <div>
                <span>R${{ dashboard.stars.price }}</span>
                <h6>Valor da estrela</h6>
              </div>
              <i class="fi fi-sr-grin-stars"></i>
            </div>
            <div class="dashboard" style="background-color: #983fb5">
              <div>
                <span>{{ dashboard.stars.meta }}%</span>
                <h6>Meta atingida</h6>
              </div>
              <i class="fi fi-sr-chart-line-up"></i>
            </div>
            <div class="dashboard" style="background-color: rgba(145,145,145,0.65)">
              <div>
                <span>0%</span>
                <h6>Deflator</h6>
              </div>
              <i class="fi fi-sr-settings-sliders"></i>
            </div>
          </div>
          <div class="content-sales">
            <div id="list-sales">
              <table>
                <thead>
                <tr>
                  <th>Nº contrato</th>
                  <th style="text-align: left">Nome do cliente</th>
                  <th style="text-align: left">Plano</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="sale in dashboard.sales.sales" :key="sale.id_contrato">
                  <td>{{ sale.id_contrato }}1</td>
                  <td style="text-align: left">{{ sale.nome_cliente }}</td>
                  <td style="text-align: left">{{ sale.plano }}</td>
                  <td>{{ sale.status }}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div id="calc-sales">
              <h6>Projeção de vendas</h6>
              <p>Hoje é dia <b>{{ projection.today }}</b>, faltam <b>{{ projection.missing }}</b> dias para acabar seu mês e
                caso você mantenha esse desempenho, terminará o mês com:
              </p>
              <div class="info-projection">
                <span style="color: #FEA11D;"><i class="fi fi-ss-star"></i>Estrelas: <b>{{ projection.stars }}</b></span>
                <div>
                  <span style="color: #009688"><i class="fi fi-ss-rocket-lunch"></i>Vendas: <b>{{ projection.sales }}</b></span>
                </div>
                <div>
                  <span style="color: #983fb5"><i class="fi fi-sr-chart-line-up"></i>Meta atingida: <b>{{ projection.meta }}%</b></span>
                </div>
                <div>
                  <span style="color: rgba(0,150,2,0.85)"><i class="fi fi-sr-sack-dollar"></i>Comissão: <b>R${{ projection.comission }}</b></span>
                </div>
              </div>
              <div class="tip-projection" v-if="projection.meta > 70 && projection.meta < 100">
                <i class="fi fi-sr-lightbulb-dollar"></i>
                <p>Faltará pouco pra meta...
                  <br>
                  <br>
                  <b>Você consegue!</b>
                </p>
              </div>
            </div>
          </div>

        </div>
        <div id="filter" v-if="operator === 2">
          <div class="itens-filter">
            <h6>Ano</h6>
            <div id="years">
              <!--              <span class="itemFilter" :class="{ isActive : filter.year === 2021 }" @click="filterYear(2021)">2021</span>-->
              <span class="itemFilter" :class="{ isActive : filter.year === 2022 }" @click="filterYear(2022)">2022</span>
            </div>
          </div>
          <div class="itens-filter">
            <h6>Mês</h6>
            <div class="months">
              <!--              <span class="itemFilter" :class="{ isActive : filter.month === '01' }" @click="filterMonth('01')">Jan</span>-->
              <!--              <span class="itemFilter" :class="{ isActive : filter.month === '02' }" @click="filterMonth('02')">Fev</span>-->
              <!--              <span class="itemFilter" :class="{ isActive : filter.month === '03' }" @click="filterMonth('03')">Mar</span>-->
              <!--              <span class="itemFilter" :class="{ isActive : filter.month === '04' }" @click="filterMonth('04')">Abr</span>-->
              <span class="itemFilter" :class="{ isActive : filter.month === '05' }" @click="filterMonth('05')">Mai</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '06' }" @click="filterMonth('06')">Jun</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '07' }" @click="filterMonth('07')">Jul</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '08' }" @click="filterMonth('08')">Ago</span>
              <!--              <span class="itemFilter" :class="{ isActive : filter.month === '09' }" @click="filterMonth('09')">Set</span>-->
              <!--              <span class="itemFilter" :class="{ isActive : filter.month === '10' }" @click="filterMonth('10')">Out</span>-->
              <!--              <span class="itemFilter" :class="{ isActive : filter.month === '11' }" @click="filterMonth('11')">Nov</span>-->
              <!--              <span class="itemFilter" :class="{ isActive : filter.month === '12' }" @click="filterMonth('12')">Dez</span>-->
            </div>
          </div>
          <!--          <div class="itens-filter">-->
          <!--            <h6>Status</h6>-->
          <!--            <div class="months">-->
          <!--              <span class="itemFilter" :class="{ isActive : filter.status === 'Aprovado' }" @click="filterStatus('Aprovado')">Aprovado</span>-->
          <!--              <span class="itemFilter" :class="{ isActive : filter.status === 'Cancelado' }" @click="filterStatus('Cancelado')">Cancelado</span>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="itens-filter" style="border: none">
            <button @click="getFilterData">Filtrar</button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

import {AXIOS} from "../../../../services/api.ts";
import Cookie from "js-cookie";

export default {
  name: "SalesDashboard",
  components: {

  },
  props: {
    collaborator: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      operator: Cookie.get('operator'),
      name: Cookie.get('name'),
      filter: {
        year: null,
        month: null,
        status: null
      },
      dashboard: {
        stars: {
          value: null,
          amount: null,
          price: null,
          meta: null
        },
        sales: {
          count: null,
          sales: null
        },
        plan: {
          name: null,
          un: null
        },
        cancel: null,
      },
      projection: {
        today: null,
        missing: null,
        stars: null,
        sales: null,
        meta: null,
        comission: null,
      }
    }
  },
  methods: {
    filterYear: function (year) {
      this.filter.year = year
    },
    filterMonth: function (month){
      this.filter.month = month
    },
    filterStatus: function (status) {
      if(this.filter.status === null || this.filter.status !== status) {
        this.filter.status = status
      } else {
        this.filter.status = null
      }
    },
    getFilterData: function () {

      AXIOS({
        method: 'GET',
        url: 'data_items/filter-sales',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token'),
          'username': this.collaborator.name
        },
        params: {
          year: this.filter.year,
          month: this.filter.month,
          status: this.filter.status
        }
      }).then((res) => {
        this.dashboard.sales.count = ''
        this.dashboard.sales.sales = ''
        this.dashboard.stars.value = 0
        this.dashboard.stars.amount = 0
        this.dashboard.stars.price = 0
        this.dashboard.stars.meta = 0
        this.dashboard.plan.name = ''
        this.dashboard.plan.un = ''
        this.dashboard.cancel = 0
        this.projection.today = res.data.dashboard.stars.original.projection.original.today
        this.projection.missing = res.data.dashboard.stars.original.projection.original.missing
        this.projection.stars = res.data.dashboard.stars.original.projection.original.stars
        this.projection.sales = res.data.dashboard.stars.original.projection.original.comission.original.sales
        this.projection.meta = res.data.dashboard.stars.original.projection.original.comission.original.meta
        this.projection.comission = res.data.dashboard.stars.original.projection.original.comission.original.comission
        this.dashboard.sales.count = res.data.dashboard.sales
        this.dashboard.sales.sales = res.data.sales
        this.dashboard.stars.value = res.data.dashboard.stars.original.stars
        this.dashboard.stars.amount = res.data.dashboard.stars.original.comission
        this.dashboard.stars.price = res.data.dashboard.stars.original.price
        this.dashboard.stars.meta = res.data.dashboard.stars.original.meta
        this.dashboard.plan.name = res.data.dashboard.plan
        this.dashboard.plan.un = res.data.dashboard.plan_qntd
        this.dashboard.cancel = res.data.dashboard.cancelled
      }).catch((error) => {
        console.log(error)
      })
    },
    closePage: function () {
      this.$emit('close-page')
    }
  },
  mounted() {
    this.getFilterData()
  }
}
</script>

<style scoped lang="scss">

#container {
  padding: 2vh 2vw !important;
  #content {

    #header-dashboard {
      display: flex;
      justify-content: space-between;

      i {
        font-size: 4rem;
        color: $text;
        cursor: pointer;
        @include transtion;
        &:hover {
          color: $red;
        }
      }
    }

    #content-page {
      background: transparent;
      @include flex(row, space-between, start, 20px);


      #sales {
        width: 100%;
        height: 100%;
        @include flex(column, initial, initial, 20px);

        #dashboards {
          height: 12%;
          display: grid;
          grid-template-columns: .5fr repeat(3, .5fr);
          gap: 2vw;

          .dashboard {
            @include flex(row, space-between, center, 1rem);
            padding: 0 2vw;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

            h6 {
              font-size: 1.4rem;
              color: rgba(255, 255, 255, .93);
              font-weight: 500;
            }

            span {
              font-size: 2.4rem;
              font-weight: 700;
              color: #FFF;
            }

            i {
              font-size: 4.2rem;
              color: #FFFFFF80;
            }
          }
        }

        .content-sales {
          @include flex(row, initial, initial, 20px);
          width: 100%;
          height: 70%;

          #calc-sales {
            width: 30%;
            padding: 15px;
            border-radius: 10px;
            background-color: #fff;

            h6 {
              font-size: 3.2rem;
              color: $text;
              margin-bottom: 2vh;
            }

            p {
              font-size: 1.6rem;
              color: $text-menu;
              margin-bottom: 2vh;

              b {
                font-size: 1.8rem;
                color: #333;
              }
            }

            .info-projection {
              @include flex(column, initial, initial, 10px);

              span {
                @include flex(row, initial, center, 5px);
                font-size: 1.6rem;
                border-bottom: 4px solid $border;
                padding-bottom: 10px;
                font-weight: 600;

                b {
                  font-weight: 800;
                }

                i {
                  font-size: 2.4rem;
                }
              }
            }

            .tip-projection {
              height: 40%;
              @include flex(column, center, center, 10px);
              text-align: center;
              padding: 0 3vw;
              color: #FEA11D;

              i {
                font-size: 5rem;
              }

              p {
                font-weight: 500;
                color: #333;
              }

              b {
                font-size: 3rem;
              }
            }
          }

          #list-sales {
            width: 70%;
            background-color: #fff;
            padding: 10px;
            border-radius: 10px;

            table {
              @include table;
              text-align: center;

              thead {
                tr {
                  th {
                    text-align: center;
                  }
                }
              }

              tbody {
                height: 62%;
              }
            }
          }
        }
      }

      #filter {
        width: 15%;
        margin: 5px;
        background: #fff;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        padding: 0 1vw;

        .isActive {
          background-color: $age-blue;
          color: #fff;
        }

        .itens-filter {
          border-bottom: 1px solid $border-high;
          text-align: center;
          padding: 5px;

          h6 {
            font-size: 1rem;
            color: $text;
            font-weight: 500;
          }

          #years, .months {
            @include flex(row, center, center, 10px);
            padding: 10px 0;


          }

          .months {
            flex-wrap: wrap;
          }

          .itemFilter {
            padding: 5px 10px;
            border-radius: 5px;
            border: 2px solid $age-blue;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            @include transtion;

            &:hover {
              background: $age-blue;
              color: #fff;
            }
          }

          button {
            margin: 2vh 0;
            background-color: $age-blue;
            color: #fff;
            padding: 5px 0px;
            border: 2px solid #fff;
            border-radius: 5px;
            font-size: 1.6rem;
            font-weight: 600;
            cursor: pointer;
            @include transtion;
            width: 80%;

            &:hover {
              border: 2px solid $age-blue;
              color: $age-blue;
              background-color: #fff;
            }

            &:active {
              background-color: $age-blue;
              color: #fff;
            }
          }
        }
      }

    }

    @media (min-width: 360px) and (max-width: 900px) {
      #content-page {
        overflow-y: auto;
        #sales {
          padding: 5px 0px;
          gap: 10px;
          #dashboards {
            @include flex(column, center, center, 10px);
            height: initial;

            .dashboard {
              width: 100%;
              padding: 10px;

              span {
                font-size: 1.6rem;
              }

              h6 {
                font-size: 1.2rem;
              }
            }
          }
          .content-sales {
            flex-direction: column-reverse;

            #list-sales {
              width: 100%;
              font-size: 2rem;
            }

            #calc-sales {
              width: 100%;
            }
          }
        }
      }

    }

  }
}

</style>
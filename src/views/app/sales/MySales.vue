<template>

  <div id="container">
    <MenuMain/>
    <div id="content">
      <h1 id="title-page">Minhas vendas</h1>
      <div id="content-page">
        <div id="sales">
          <div id="dashboards">
            <div class="dashboard">
              <h6>Quantidade de estrelas</h6>
              <span>281</span>
            </div>
            <div class="dashboard">
              <h6>Quantidade de vendas</h6>
              <span>35</span>
            </div>
            <div class="dashboard">
              <h6>Plano mais vendido</h6>
              <span>800Mbps</span>
            </div>
            <div class="dashboard">
              <h6>Cancelamentos</h6>
              <span>12</span>
            </div>
          </div>

        </div>
        <div id="filter">
          <div class="itens-filter">
            <h6>Ano</h6>
            <div id="years">
              <span class="itemFilter" :class="{ isActive : filter.year === 2021 }" @click="filterYear(2021)">2021</span>
              <span class="itemFilter" :class="{ isActive : filter.year === 2022 }" @click="filterYear(2022)">2022</span>
            </div>
          </div>
          <div class="itens-filter">
            <h6>Mês</h6>
            <div id="months">
              <span class="itemFilter" :class="{ isActive : filter.month === '01' }" @click="filterMonth('01')">Jan</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '02' }" @click="filterMonth('02')">Fev</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '03' }" @click="filterMonth('03')">Mar</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '04' }" @click="filterMonth('04')">Abr</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '05' }" @click="filterMonth('05')">Mai</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '06' }" @click="filterMonth('06')">Jun</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '07' }" @click="filterMonth('07')">Jul</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '08' }" @click="filterMonth('08')">Ago</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '09' }" @click="filterMonth('09')">Set</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '10' }" @click="filterMonth('10')">Out</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '11' }" @click="filterMonth('11')">Nov</span>
              <span class="itemFilter" :class="{ isActive : filter.month === '12' }" @click="filterMonth('12')">Dez</span>
            </div>
          </div>
          <div class="itens-filter">
            <h6>Status</h6>
            <div id="months">
              <span class="itemFilter" :class="{ isActive : filter.status === 'Aprovado' }" @click="filterStatus('Aprovado')">Aprovado</span>
              <span class="itemFilter" :class="{ isActive : filter.status === 'Pré_contrato' }" @click="filterStatus('Pré_contrato')">Pré contrato</span>
              <span class="itemFilter" :class="{ isActive : filter.status === 'Cancelado' }" @click="filterStatus('Cancelado')">Cancelado</span>
            </div>
          </div>
          <div class="itens-filter" style="border: none">
            <button @click="getFilterData">Filtrar</button>
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

export default {
  name: "MySales",
  components: {
    MenuMain
  },
  data () {
    return {
      filter: {
        year: null,
        month: null,
        status: null
      },
      sales: {
        stars: null,
        amount: null,

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

      if(this.filter.year !== null && this.filter.month !== null) {
        AXIOS({
          method: 'GET',
          url: 'data_items/filter-sales',
          headers: {
            'Authorization': 'Bearer '+Cookie.get('rv_token'),
            'username': 'Amanda Andrade Brito'
          },
          params: {
            year: this.filter.year,
            month: this.filter.month,
            status: this.filter.status
          }
        }).then((res) => {
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      } else {
        alert('Selecione os filtros!')
      }


    }
  }
}
</script>

<style scoped lang="scss">

#content-page {
  background: transparent !important;

  @include flex(row, space-between, start, 20px);

  #sales {
    width: 80%;
    height: 100%;

    #dashboards {
      height: 18%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

      .dashboard {
        @include flex(column, center, center, 1rem);
        margin: 5px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        text-align: center;

        h6 {
          font-size: 1.2rem;
          padding-bottom: 2vh;
          border-bottom: 2px solid $border-mid;
          color: $text-dashboard;
          font-weight: 400;
        }

        span {
          font-size: 2rem;
          font-weight: 600;
          color: $text;
        }
      }
    }
  }

  #filter {
    width: 20%;
    margin: 5px;
    background: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

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

      #years, #months {
        @include flex(row, center, center, 10px);
        padding: 10px 0;


      }

      #months {
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
      }

      button {
        margin: 2vh 0;
        background-color: $age-blue;
        color: #fff;
        padding: 5px 50px;
        border: 2px solid #fff;
        border-radius: 5px;
        font-size: 1.6rem;
        font-weight: 600;
        cursor: pointer;
        @include transtion;

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

</style>
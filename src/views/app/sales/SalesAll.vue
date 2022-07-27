<template>
    <div id="container">
      <MenuMain/>
      <div id="content">
        <h1 id="title-page">Todas as vendas instaladas</h1>
        <div id="content-page">
          <div id="filter-table">
            <div id="container-search">
              <input type="text" name="search" id="search" placeholder="Nome do vendedor..." autocomplete="off"
                     v-model="search.value"
                     @keydown.enter="getSalesSearch()">
            </div>
            <div id="filter" @click="onFilter">
              <i class="fi fi-rr-filter"></i>
            </div>
          </div>
          <div id="table">
            <table>
              <thead>
              <tr>
                <th>Nº contrato</th>
                <th>Nome do cliente</th>
                <th>Vendedor</th>
                <th>Supervisor</th>
                <th>Status</th>
                <th>Situação</th>
                <th>Plano</th>
<!--                <th>Ações</th>-->
              </tr>
              </thead>
              <tbody>
              <tr v-for="(sale, key) in sales.data" :key="key">
                <td>{{ sale.id_contrato }}</td>
                <td>{{ sale.nome_cliente }}</td>
                <td>{{ sale.vendedor }}</td>
                <td>{{ sale.supervisor }}</td>
                <td>
                  <template v-if="sale.status === 'Aprovado'">
                    <span class="static-td sucess">
                    {{ sale.status }}
                    </span>
                  </template>
                  <template v-if="sale.status === 'Pré-Contrato'">
                    <span class="static-td pendent">
                    {{ sale.status }}
                    </span>
                  </template>
                  <template v-if="sale.status === 'Em Aprovação'">
                    <span class="static-td pendent">
                    {{ sale.status }}
                    </span>
                  </template>
                </td>
                <td>
                  <template v-if="sale.situacao === 'Normal'">
                    <span class="static-td sucess">
                    {{ sale.situacao }}
                    </span>
                  </template>
                  <template v-if="sale.situacao === 'Cancelado'">
                    <span class="static-td failure">
                    {{ sale.situacao }}
                    </span>
                  </template>
                  <template v-if="sale.situacao === 'Bloqueio Financeiro'">
                    <span class="static-td failure" style="font-size: 1rem">
                    {{ sale.situacao }}
                    </span>
                  </template>
                  <template v-if="sale.situacao === 'Bloqueio Administrativo'">
                    <span class="static-td failure" style="font-size: 1rem">
                    {{ sale.situacao }}
                    </span>
                  </template>
                  <template v-if="sale.situacao === 'Demonstração'">
                    <span class="static-td offline">
                    {{ sale.situacao }}
                    </span>
                  </template>
                  <template v-if="sale.situacao === 'Encerrado'">
                    <span class="static-td offline">
                    {{ sale.situacao }}
                    </span>
                  </template>
                  <template v-if="sale.situacao === 'Suspenso'">
                    <span class="static-td failure">
                    {{ sale.situacao }}
                    </span>
                  </template>
                  <template v-if="sale.situacao === 'Cortesia'">
                    <span class="static-td offline">
                    {{ sale.situacao }}
                    </span>
                  </template>
                </td>
                <td>{{ sale.plano }}</td>
<!--                <td>-->
<!--                  <div id="actions">-->
<!--                    <i class="fi fi-rr-interrogation"></i>-->
<!--                  </div>-->
<!--                </td>-->
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <FilterCard
        v-if="filter.value === 1"
        @on-filter="onFilter"
        @apply-filters="applyFilters"
      />
    </div>

</template>

<script>

import MenuMain from "@/components/app/MenuMain";
import {AXIOS} from "../../../../services/api.ts";
import Cookie from "js-cookie";
import FilterCard from "@/components/app/FilterCard";


export default {
  name: "SalesAll",
  components: {
    MenuMain,
    FilterCard

  },
  data () {
    return {
      sales: {
        type: Object,
        default: null
      },
      search: {
        type: String,
        default: null,
        value: ''
      },
      filter: {
        type: Number,
        default: 0,
        value: 0
      }
    }
  },
  methods: {
    getSales: function () {
      AXIOS({
        method: 'GET',
        url: 'data_voalle',
        headers: {
          'Authorization': 'Bearer '+ Cookie.get('rv_token')
        }
      }).then((res) => {
        this.sales = res
      })

    },
    getSalesSearch: function () {
      AXIOS({
        method: 'GET',
        url: 'data_voalle',
        headers: {
          'Authorization': 'Bearer '+ Cookie.get('rv_token')
        },
        params: {
          vendedor: this.search.value
        }
      }).then((res) => {
        this.sales = res
      })
    },
    onFilter() {
      if(this.filter.value === 0) {
        this.filter.value = 1
      } else {
        this.filter.value = 0
      }
    },
    applyFilters: function (data) {
      AXIOS({
        method: 'GET',
        url: 'data_voalle',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        },
        params: data
      }).then((res) => {
        this.sales = res
      })
    }
  },
  mounted() {
    this.getSales()
  }

}
</script>

<style scoped lang="scss">

#content {
  #content-page {
    border-radius: 5px;
    border: 1px solid $border-high;

    #filter-table {
      @include filter;
      padding: 0 1vw;
      @include flex(arrow, initial, center, 2vw);

      #container-search {
        @include container-search;
        width: 25%;

        #search {
          @include input-search;
          width: 90%;
        }

        div {
          i {
            font-size: 2rem;
            color: $age-orange;
          }
        }
      }

      #filter {
        background-color: $age-blue;
        padding: 5px 10px 2px 10px;
        border-radius: 5px;
        cursor: pointer;
        @include transtion;

        i {
          color: #fff;
          font-size: 1.8rem;
        }

        &:hover {
          opacity: .8;
        }
      }
    }

    #table {
      @include container(100%, initial, 0 1vw, transparent);
      max-height: 85%;
      //overflow-y: auto;
      @include flex(column, initial, initial, 1rem);

      table {
        @include table;

        thead tr, tbody tr {

          th:nth-child(1), td:nth-child(1) {
            width: 7%;
            text-align: center;
            padding: 0;

          }

          th:nth-child(2), td:nth-child(2), th:nth-child(3), td:nth-child(3), th:nth-child(4), td:nth-child(4) {
            width: 15%;
            text-align: left;
          }

          th:nth-child(5), td:nth-child(5), th:nth-child(6), td:nth-child(6) {
            width: 15%;
            text-align: center;
            padding: 0;

          }

          th:nth-child(7),td:nth-child(7) {
            width: 15%;
          }

          td:nth-child(7) {
            font-size: 1.1rem;
          }

          th:nth-child(8),td:nth-child(8) {
            width: 10%;
            text-align: center;
          }

          #actions {
            @include flex(arrow, center, center, 0);
            font-size: 2rem;
            color: $i-menu;
          }

        }
        tbody tr {

          .static-td {
            @include static-td;
          }

          .sucess {
            @include sucess;
          }

          .pendent {
            @include pendent;
          }

          .failure {
            @include failure;
          }

          .offline {
            @include offline;
          }

        }
      }
    }
  }
}

</style>
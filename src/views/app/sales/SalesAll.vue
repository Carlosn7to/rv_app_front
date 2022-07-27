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
              <div>
                <i class="fi fi-rr-settings-sliders"></i>
              </div>
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
                <th>Data do contrato</th>
                <th>Data da ativação</th>
                <th>Data do cancelamento</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(sale, key) in sales.data" :key="key">
                <td>{{ sale.id_contrato }}</td>
                <td>{{ sale.nome_cliente }}</td>
                <td>{{ sale.vendedor }}</td>
                <td>{{ sale.supervisor }}</td>
                <td>
                  <span class="static-td" :class="{ 'sucess' : sale.status === 'Aprovado', 'pendent' : sale.status === 'Em Aprovação'}">
                    {{ sale.status }}
                  </span>
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
                </td>
                <td>{{ sale.plano }}</td>
                <td>{{ sale.data_contrato }}</td>
                <td>{{ sale.data_ativacao }}</td>
                <td>{{ sale.data_cancelamento }}</td>
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
  name: "SalesAll",
  components: {
    MenuMain

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
      @include flex(arrow, initial, center, 0);

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
    }

    #table {
      @include container(100%, initial, 0 1vw, transparent);
      max-height: 85%;
      //overflow-y: auto;
      @include flex(column, initial, initial, 1rem);

      table {
        @include table;

        thead tr {
          th:nth-child(1) {
            width: 5%;
            text-align: center;
          }

          th:nth-child(7) {
            width: 10%;
            text-align: center;
          }

          th:nth-child(8) {
            width: 10%;
            text-align: center;
          }

          th:nth-child(5) {
            width: 10%;
            text-align: center;
          }

          th:nth-child(6) {
            width: 10%;
            text-align: center;
          }

          th:nth-child(9) {
            width: 10%;
            text-align: center;
          }

          th:nth-child(10) {
            width: 10%;
            text-align: center;
          }


        }
        tbody tr {
          td:nth-child(1) {
            width: 5%;
            text-align: center;
          }

          td:nth-child(7) {
            width: 10%;
            text-align: center;
            font-size: 1.2rem;
          }

          td:nth-child(8) {
            width: 10%;
            text-align: center;
          }

          td:nth-child(5) {
            width: 10%;
            text-align: center;
          }

          td:nth-child(6) {
            width: 10%;
            text-align: center;
          }

          td:nth-child(9) {
            width: 10%;
            text-align: center;
          }

          td:nth-child(10) {
            width: 10%;
            text-align: center;
          }

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

        }
      }
    }
  }
}


</style>
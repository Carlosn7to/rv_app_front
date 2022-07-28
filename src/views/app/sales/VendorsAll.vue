<template>
  <div id="container">
    <MenuMain/>
    <div id="content" v-if="page.name === 'all'">
      <h1 id="title-page">Todas os Supervisores/Vendedores</h1>
      <div id="content-page">
        <div id="filter-table">
          <div id="container-search">
            <input type="text" name="search" id="search" placeholder="Nome do supervisor..." autocomplete="off"
                   v-model="searchSupervisor.value"
                   @keydown.enter="getSupervisorsSearch()">
          </div>
          <div id="container-search">
            <input type="text" name="search" id="search" placeholder="Nome do vendedor..." autocomplete="off"
                   v-model="searchVendor.value"
                   @keydown.enter="getVendorsSearch()">
          </div>
        </div>
        <div id="table">
          <table>
            <thead>
            <tr>
              <th>Supervisor</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="supervisor in supervisors.value" :key="supervisor.vendedor">
              <td>{{ supervisor.supervisor }}</td>
              <td class="actions"><i class="fi fi-rr-sign-in-alt" @click="pageAlter('supervisor', supervisor.supervisor)"></i></td>
            </tr>
            </tbody>
          </table>
          <table>
            <thead>
            <tr>
              <th>Vendedor</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="vendor in vendors.value" :key="vendor.vendedor">
              <td>{{ vendor.vendedor }}</td>
              <td class="actions"><i class="fi fi-rr-sign-in-alt"></i></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <SupervisorDashboard
      :supervisor="page.supervisor.name"
      v-if="page.name === 'supervisor'"
    />

  </div>
</template>

<script>

import MenuMain from "@/components/app/MenuMain";
import {AXIOS} from "../../../../services/api.ts";
import Cookie from "js-cookie";
import SupervisorDashboard from "@/components/app/sales/SupervisorDashboard";

export default {
  name: "VendorsAll",
  components: {
    MenuMain,
    SupervisorDashboard
  },
  data () {
    return {
      searchVendor: {
        type: String,
        default: null,
        value: ''
      },
      searchSupervisor: {
        type: String,
        default: null,
        value: ''
      },
      vendors: {
        type: Object,
        default: null,
        value: null
      },
      supervisors: {
        type: Object,
        default: null,
        value: null
      },
      page: {
        name: 'all',
        supervisor: {
          name: ''
        },
        vendor: {
          name: ''
        }
      }

    }
  },
  methods: {
    getVendorsSearch: function () {
      AXIOS({
        method: 'GET',
        url: 'data_items/vendors',
        headers: {
          'Authorization': 'Bearer '+ Cookie.get('rv_token')
        },
        params: {
          vendedor: this.searchVendor.value
        }
      }).then((res) => {
        this.vendors.value = res.data
      })
    },
    getSupervisorsSearch: function () {
      AXIOS({
        method: 'GET',
        url: 'data_items/supervisors',
        headers: {
          'Authorization': 'Bearer '+ Cookie.get('rv_token')
        },
        params: {
          supervisor: this.searchSupervisor.value
        }
      }).then((res) => {
        this.supervisors.value = res.data
      })
    },
    pageAlter: function (page, name) {
      this.page.name = page

      if(page === 'supervisor') {
        this.page.supervisor.name = name
      } else if(page === 'vendor') {
        this.page.vendor.name = name
      }
    }
  },
  mounted() {
    this.getVendorsSearch()
    this.getSupervisorsSearch()
    this.pageAlter('supervisor', 'Keila Jaqueline da Silva')
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
      padding: 0 8vw;
      @include flex(arrow, space-between, center, 2vw);

      #container-search {
        @include container-search;
        width: 30%;

        #search {
          @include input-search;
          width: 100%;
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
      @include flex(row, space-between, initial, 1rem);

      table {
        @include table;
        width: 45%;

        thead tr, tbody tr {

          th:nth-child(1), td:nth-child(1) {
            width: 70%;
            text-align: left;
            padding: 0 2vw;
          }

          th:nth-child(2), td:nth-child(2) {
            text-align: center;
          }

          td:nth-child(2) {
            i {
              font-size: 1.6rem;
              color: $i-menu;
              cursor: pointer;
              @include transtion;

              &:hover {
                opacity: .8;
              }
            }
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
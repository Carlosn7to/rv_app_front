<template>
  <div id="modal">
    <div id="card">
      <div id="close-button" @click="onFilter">
        <i class="fi fi-rr-cross-small"></i>
      </div>
      <div id="content-filter">
        <div class="input-filter">
          <label for="n_contrato">Nº Contrato</label>
          <input
              v-model="filter.inputs.id_contrato"
              type="text" name="n_contrato" id="n_contrato">
        </div>
        <div class="input-filter">
          <label for="nome_cliente">Nome do cliente</label>
          <input
              v-model="filter.inputs.nome_cliente"
              type="text" name="nome_cliente" id="nome_cliente">
        </div>
        <div class="input-filter">
          <label for="vendedor">Vendedor</label>
          <input
              v-model="filter.inputs.vendedor"
              type="text" name="vendedor" id="vendedor">
        </div>
        <div class="input-filter">
          <label for="supervisor">Supervisor</label>
          <input
              v-model="filter.inputs.supervisor"
              type="text" name="supervisor" id="supervisor">
        </div>
        <div class="input-filter">
          <label for="">Status</label>
          <div class="check-container">
            <div class="check" v-for="item in this.filter.status" :key="item.status">
              <input
                  v-model="filter.inputs.status"
                  type="checkbox" name="status" :id="item.status" :value="item.status">
              <label :for="item.status">{{ item.status }}</label>
            </div>
          </div>
        </div>
        <div class="input-filter">
          <label for="">Situação</label>
          <div class="check-container">
            <div class="check" v-for="item in this.filter.situation" :key="item.situacao">
              <input
                  v-model="filter.inputs.situacao"
                  type="checkbox" name="situacao" :id="item.situacao" :value="item.situacao">
              <label :for="item.situacao">{{ item.situacao }}</label>
            </div>
          </div>
        </div>
      </div>
        <input type="submit" class="submit" value="Aplicar filtros" @click="applyFilters('oi')">
    </div>
  </div>
</template>

<script>

import {AXIOS} from "../../../services/api.ts";
import Cookie from "js-cookie";

export default {
  name: "FilterCard",
  data () {
    return {
      filter: {
        type: Object,
        default: null,
        status: null,
        situation: null,
        inputs: {
          id_contrato: '',
          nome_cliente: '',
          vendedor: '',
          supervisor: '',
          status: [],
          situacao: [],
        }
      }
    }
  },
  methods: {
    onFilter: function () {
      this.$emit('on-filter')
    },
    getFilters: function (){
      AXIOS({
        method: 'GET',
        url: 'data_items/status',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        }
      }).then((res) => {
          this.filter.status = res.data[0]
          this.filter.situation = res.data[1]
      })
    },
    applyFilters: function () {
      this.$emit('apply-filters', this.filter.inputs)
      this.onFilter()
    }
  },
  mounted() {
    this.getFilters()
  }
}
</script>

<style scoped lang="scss">

#modal {
  @include modal;

  #card {
    @include card-modal(30vw, initial, 0 0 6vh 0);
    overflow-y: auto;
    @include flex(column, initial, initial, 10px);

    #close-button {
      @include close-button;

    }

    #content-filter {
      @include container(100%, 90%, 0 2vw, transparent);
      @include flex(column, initial, initial, 20px);

      .input-filter {
        @include flex(column, initial, initial, 10px);

        label {
          font-size: 1.2rem;
          font-weight: 600;
          color: $text;
        }
        input[type=text] {
          @include input-text;
        }
      }

      .check-container {
        @include flex(row, initial, initial, 10px);
        flex-wrap: wrap;


        .check {
          @include flex(arrow, initial, center, 5px);

          label {
            font-size: 1rem;
            font-weight: 600;
          }
        }
      }
    }

    .submit {
      @include btn-age;
      width: 50%;
      margin: 2vh auto;
      color: $age-blue;
      border-color: $age-blue;

      &:hover {
        background-color: $age-blue;
        color: #FFF;
      }
    }
  }
}

</style>
<template>
  <div id="card-modal">
    <CloseButton
      @close-page="closePage()"
    />
    <div id="content-card">
      <h6>Editar configurações</h6>
      <div id="inputs">
        <div class="input">
          <label for="supervisor">Supervisor</label>
          <input type="text" name="supervisor" id="supervisor" v-model="inputs.supervisor" autocomplete="off">
        </div>
        <div class="input">
          <label for="supervisor">Canal</label>
          <input type="text" name="canal" id="canal" v-model="inputs.channel"  autocomplete="off">
        </div>
        <div class="input">
          <label for="supervisor">Meta atual</label>
          <input type="number" name="meta" id="meta" v-model="inputs.meta">
        </div>
        <button @click="editCollaborator()">Cadastrar informações</button>
      </div>
    </div>

  </div>
</template>

<script>

import CloseButton from "@/components/app/_aux/CloseButton";
import {AXIOS} from "../../../../../services/api.ts";
import Cookie from "js-cookie";

export default {
  name: "EditCollaborator",
  components: {
    CloseButton
  },
  props: {
    collaborator: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      inputs: {
        supervisor: this.collaborator.supervisor,
        channel: this.collaborator.channel,
        meta: this.collaborator.meta
      },
      msg: ''
    }
  },
  methods: {
    closePage: function () {
      this.$emit('close-page')
    },
    refreshData: function (msg, type) {
      this.$emit('refresh-data')
      this.closePage()
      this.$emit('msg', {
        data: {
          msg: msg,
          type: type
        }
      })
    },
    editCollaborator: function () {
      AXIOS({
        method: 'PUT',
        url: 'collaborator/'+this.collaborator.id,
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        },
        data: {
          supervisor: this.inputs.supervisor,
          canal: this.inputs.channel,
          meta: this.inputs.meta
        }
      }).then((res) => {

        if(res.data.status === 1) {
          this.refreshData(res.data.msg, 'sucess')
        } else {
          alert(res.data.msg)
        }

      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped lang="scss">

  #modal {
    #card-modal {
      width: 30vw;
      padding-bottom: 4vh ;

      #content-card {
        @include container(100%, 90%, 1vh 2vw, transparente);
        width: 100%;

        h6 {
          text-align: center;
          font-size: 3rem;
          color: $text;
        }

        #inputs {
          @include flex(column, flex-start, initial, 20px);
          margin-top: 2vh;
          padding: 2vh 3vw;

          .input {
            @include flex(column, flex-start, initial, 10px);

            label {
              font-size: 1.4rem;
              color: $text;
              font-weight: 600;
            }

            input[type=text], input[type=number] {
              @include input-text;
            }

          }
          button {
            @include btn-age;
            width: 70%;
            margin: 0 auto;
          }
        }


      }
    }
  }

</style>
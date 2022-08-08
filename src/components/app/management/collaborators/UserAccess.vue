<template>
  <div id="card-modal">
    <CloseButton
        @close-page="closePage()"
        v-if="create.status === ''"
    />
    <div id="content-card" v-if="collaborator.have_user === 0 && loading === false">
      <template v-if="create.status === ''">
        <img :src="require('@/assets/icons/foguete.png')" alt="logo-age">
        <h6>Criar usuário</h6>
        <p>Pronto pra gerar um acesso ao colaborador <b>{{ collaborator.name }}?</b></p>
        <button id="active" @click="active()">Criar novo usuário</button>
        <span><b>Atenção!</b> Você ainda precisará enviar o usuário e senha ao colaborador*</span>
      </template>
      <template v-if="create.status === 'success'">
        <img :src="require('@/assets/icons/foguete.png')" alt="logo-age" style="margin-top: 2vh">
        <h6>Usuário criado!</h6>
        <p style="text-align: left; width: 100%">Este é seu acesso, único e intransferível, cuide bem dele!</p>
        <p style="text-align: left; width: 100%">Login: <b>{{ user }}</b></p>
        <p style="text-align: left; width: 100%">Senha: <b>{{ password }}</b></p>
        <button id="active" @click="refreshData(this.msg, 'success')">Já anotei!</button>
      </template>
    </div>
    <div id="content-card" v-if="collaborator.have_user === 1 && loading === false">
      <img :src="require('@/assets/icons/triste.png')" alt="logo-age">
      <h6>Inativar usuário</h6>
      <p>É uma pena, mas essa ação irá retirar o acesso do colaborador <b>{{ collaborator.name }}!</b></p>
      <button id="inactive" @click="inactive(collaborator.name)">Inativar usuário</button>
    </div>
    <div id="loading">
      <LoadingMain
          v-if="loading === true"
      />
    </div>
  </div>
</template>

<script>

import CloseButton from "@/components/app/_aux/CloseButton";
import {AXIOS} from "../../../../../services/api.ts";
import Cookie from "js-cookie";
import LoadingMain from "@/components/app/_aux/LoadingMain";

export default {
  name: "UserAccess",
  props: {
    collaborator: {
      required: true,
      type: Object
    }
  },
  components: {
    CloseButton,
    LoadingMain,
  },
  data () {
    return {
      loading: false,
      create: {
        status: ''
      },
      msg: '',
      user: '',
      password: '',
    }
  },
  methods: {
    closePage: function () {
      this.$emit('close-page')
    },
    active: function () {

      this.loading = true

      AXIOS({
        method: 'POST',
        url: 'users',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        },
        data: {
          id: this.collaborator.id
        }
      }).then((res) => {
        console.log(res)
        this.create.status = 'success'
        this.loading = false
        this.msg = res.data.msg
        this.user = res.data.user
        this.password = res.data.password
      }).catch((error) => {
        this.refreshData(error.response.data, 'trigger')
      })
    },
    inactive: function (name) {
      AXIOS({
        method: 'DELETE',
        url: 'users/'+name,
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        }
      }).then((res) => {
        this.refreshData(res.data, 'trigger')
      }).catch((error) => {
        this.refreshData(error.response.data, 'trigger')
      })
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
    }
  }
}
</script>

<style scoped lang="scss">

#modal {
  #card-modal {
    width: 30vw;
    padding-bottom: 4vh;

    #content-card {
      @include container(100%, 90%, 1vh 3vw, transparente);
      @include flex(column, flex-start, center, 10px);
      width: 100%;
      text-align: center;

      img {
        width: 4vw;
        height: auto;
      }

      h6 {
        font-size: 3rem;
        font-weight: 500;
        color: $text;
      }

      p {
        font-size: 1.4rem;
        color: $text-menu;

        b {
          color: $text;
          user-select: text !important;
        }
      }

      #active {
        @include btn-active;
        width: 50%;
        margin: 1vh 0;
      }

      #inactive {
        @include btn-inactive;
        width: 50%;
        margin: 1vh 0;
      }

      span {
        font-size: 1.2rem;
        color: $text-menu;

        b {
          color: $text;
        }
      }
    }
  }
}
</style>
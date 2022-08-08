<template>
  <div id="card">
    <div id="logo-company">
      <img :src="require('@/assets/company/logo_azul_laranja.png')" alt="logo_age">
    </div>
    <div id="form">
      <span
          :class="{ 'success' : msg.type === 'success', 'trigger' : msg.type === 'trigger' }"
          v-if="msg.value !== ''">{{ msg.value }}</span>
      <div id="loading" v-if="loading === true">
        <LoadingMain
        />
        <span>Conectando...</span>
      </div>
      <template v-if="loading === false">
        <input
            v-model="email"
            type="text" name="email" id="email" placeholder="E-mail">
        <input
            v-model="password"
            @keydown.enter="authentic"
            type="password" name="password" id="password" placeholder="Senha">
        <input type="submit" value="Entrar" @click="authentic">
      </template>
    </div>

  </div>
</template>

<script>

import {AXIOS} from "../../../services/api.ts";
import Cookie from "js-cookie";
import LoadingMain from "@/components/app/_aux/LoadingMain";

export default {
  name: "CardLogin",
  components: {
    LoadingMain
  },
  data () {
    return {
      email: '',
      password: '',
      msg: {
        type: '',
        value: ''
      },
      loading: false
    }
  },
  methods: {
    authentic: function () {

      const payload = {
        email: this.email,
        password: this.password
      }

      AXIOS({
        method: "POST",
        url: "login",
        headers: {
          'Content-Type': 'application/json',
          'Access': 'application/json',
        },
        data: JSON.stringify(payload)
      })
          .then((res) => {
            this.loading = true
            Cookie.set('rv_token', res.data.access_token)
            Cookie.set('name', res.data.name)
            Cookie.set('level', res.data.level)
            this.$router.replace('/minhas-vendas')
          }).catch((error) => {
            switch (error.response.status) {
              case 422:
                this.msg.type = 'trigger'
                this.msg.value = 'Preencha todos os campos!'
              break
              case 401:
                this.msg.type = 'trigger'
                this.msg.value = 'Usuário ou senha incorretos!'
              break
            }
      })

    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">

  #card {
    @include container(25%, 55%, 0, #fff);
    margin-top: 9vh;

    #logo-company {
      @include container(100%, 15vh, 0, #fff);
      @include flex(row, center, center, 0);
      border-bottom: 1px solid #cccccc50;

      img {
        width: 10vw;
        height: auto;
      }
    }
    #form {
      @include container(100%, initial, 5vh 3vw, #fff);
      @include flex(column, center, center, 20px);

      span {
        padding: 7px 20px;
        font-weight: 400;
        font-size: 1.2rem;
        border-radius: 3px;
      }

      .trigger {
        background-color: #ffc2c2;
        color: red;
      }

      .success {
        background-color: #47cc47;
        color: #fff;
      }

      input[type=text], input[type=password] {
        @include container(100%, 5vh, 5px 10px, #f4f4f4);
        border: none;
        border-radius: 2px;
        outline: none;
        transition: .3s ease-in-out;
        font-weight: 500;
        font-size: 1.6rem;
        color: $text;
          &:focus {
            background: $input-fcs;
          }
      }

      input[type=submit] {
        @include btn-age();
      }
    }
  }

  @media (min-width: 360px) and (max-width: 900px) {
      #card {
        width: 300px;
        height: 400px;
        margin-top: 15vh;
        padding: 0vh 5vw;

        #logo-company {
          img {
            width: 20vh;
          }
        }

        #form {

          input[type=text], input[type=password] {
            @include container(100%, 40px, 5px 10px, #f4f4f4);
            border: none;
            border-radius: 2px;
            outline: none;
            transition: .3s ease-in-out;
            font-weight: 500;
            font-size: 1.6rem;
            color: $text;
            &:focus {
              background: $input-fcs;
            }
          }
      }
    }
}

</style>
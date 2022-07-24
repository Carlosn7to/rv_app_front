<template>
  <div id="card">
    <div id="logo-company">
      <img :src="require('@/assets/company/logo_azul_laranja.png')" alt="logo_age">
    </div>
    <div id="form">
      <input
          v-model="email"
          type="text" name="email" id="email" placeholder="E-mail">
      <input
          v-model="password"
          type="password" name="password" id="password" placeholder="Senha">
      <input type="submit" value="Entrar" @click="authentic">
    </div>

  </div>
</template>

<script>

import {AXIOS} from "../../../services/api.ts";

export default {
  name: "CardLogin",
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    authentic: function () {

      const payload = {
        email: this.email,
        password: this.password
      }

      console.log(payload)

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
            console.log(res)
          })


    }
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

</style>
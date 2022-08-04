<template>
  <div class="menu" :class="{ menuOff : menu}">
    <div id="logo-company">
      <img :src="require('@/assets/company/logo_azul_laranja.png')" alt="logo-age">
      <div id="menu-hamb" @click="alterMenu()">
        <i class="fi fi-rr-angle-small-left"></i>
        <i class="fi fi-rr-menu-burger"></i>
      </div>
    </div>
    <div id="content-menu">
      <nav>
        <ul class="href-menu">
          <span>Principal</span>
          <router-link to="/home">
<!--            <li>-->
<!--              <div></div>-->
<!--              <div>-->
<!--                <i class="fi fi-rr-home"></i>-->
<!--              </div>-->
<!--              <span>Home</span>-->
<!--            </li>-->
          </router-link>
          <router-link to="/minhas-vendas">
            <li>
              <div></div>
              <div>
                <i class="fi fi-rr-chart-histogram"></i>
              </div>
              <span>Minhas vendas</span>
            </li>
          </router-link>
        </ul>
<!--        <ul class="href-menu">-->
<!--          <span>Supervisão</span>-->
<!--          <router-link to="/vendas">-->
<!--            <li>-->
<!--              <div></div>-->
<!--              <div>-->
<!--                <i class="fi fi-rr-chat-arrow-grow"></i>-->
<!--              </div>-->
<!--              <span>Vendas</span>-->
<!--            </li>-->
<!--          </router-link>-->
<!--          <router-link to="/equipes">-->
<!--            <li>-->
<!--              <div></div>-->
<!--              <div>-->
<!--                <i class="fi fi-rr-users-alt"></i>-->
<!--              </div>-->
<!--              <span>Equipes</span>-->
<!--            </li>-->
<!--          </router-link>-->
<!--        </ul>-->
        <ul class="href-menu">
          <span>Ações</span>
<!--          <router-link to="/gerenciamento">-->
<!--            <li>-->
<!--              <div></div>-->
<!--              <div>-->
<!--                <i class="fi fi-rr-settings-sliders"></i>-->
<!--              </div>-->
<!--              <span>Gerenciamento</span>-->
<!--            </li>-->
<!--          </router-link>-->
          <router-link to="/logout">
            <li>
              <div></div>
              <div>
                <i class="fi fi-rr-sign-out-alt"></i>
              </div>
              <span>Logout</span>
            </li>
          </router-link>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: "MenuMain",
  data () {
    return {
        menu: true,
    }
  },
  methods: {
    alterMenu: function () {
      if(this.menu === false) {
        this.menu = true
      }else {
        this.menu = false
      }
    }
  }
}
</script>

<style scoped lang="scss">

  .menu {
    @include container(22%, 100%, 0, #FFF);
    border-right: 2px solid #cccccc90;
    @include transtion;
    white-space: nowrap;

    #logo-company {
        @include container(100%, 10%, 0 2vw, #fff);
        @include flex(row, space-between, center, 0);
        border-bottom: 2px solid $border;

        img {
          width: 50%;
          height: auto;
        }

        #menu-hamb {
          color: $i-menu;
          font-size: 2rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          @include transtion;

          i:nth-child(1) {
            font-size: 1.6rem;
            padding-bottom: .1rem;
          }

          &:hover {
            opacity: .8;
          }
        }
      }

    #content-menu {
      @include container(100%, 80%, 0, #fff);

      nav {
        width: 100%;
        height: 100%;

        .href-menu {
          @include flex(column, initial, initial, .2rem);
          margin-top: 1vh;
          padding: 0 0 0 10px;

          span {
            padding: 0 2vw;
            margin: 1vh 0;
            color: $text-menu;
            font-weight: 600;
            letter-spacing: .2px;
            font-size: 1.2rem;
            @include transtion
          }

          li {
            padding: 6px 0 6px 12px;
            font-weight: 500;
            color: #3C3B40;
            @include flex(row, initial, center, 1rem);
            transition: .3s ease-in-out;
            border-radius: 5px 0px 0px 5px;
            cursor: pointer;

            &:hover {
              background-color: $hover-list;
            }

            &:hover > div i {
              color: $i-hover;
            }

            &:hover > span {
              color: $span-list-hover;
            }

            &:hover > div:nth-child(2) {
              background-color: $i-active-list;
            }

            i {
              font-size: 2rem;
              color: $i-menu;
              cursor: pointer;
              transition: .2s ease-in-out;

            }

            span {
              padding: 0;
              margin: 1vh 0;
              color: $text-menu;
              font-weight: 600;
              letter-spacing: .2px;
              font-size: 1.5rem;

            }

            div:nth-child(1) {
              width: 5px;
              height: 4vh;
              margin-right: 5px;
              border-radius: 2px;
            }

            div:nth-child(2) {
              background-color: $i-box;
              padding: 10px 10px 5px 10px;
              border-radius: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: ease-in-out .3s;
            }

          }

          .router-link-active {

            li {
              background-color: $hover-list;
            }

            span {
              font-weight: 600;
              color: $span-list-hover;
            }

            i {
              color: $i-hover;
            }

            div:nth-child(2) {
              background-color: $i-active-list;
            }

          }

        }

      }
    }

  }

  .menuOff {
    width: 5%;
    background-color: transparent;
    border-right: none;

    #logo-company {
      padding: 0;
      justify-content: center;
      background-color: transparent;
      border-bottom: none;

      img {
        display: none;
      }

      #menu-hamb {

        i:nth-child(1) {
          display: none;
        }

      }
    }

    #content-menu {
      display: none;

      nav {

        .href-menu {
          padding: 0;

          li {
            padding: 6px 0;
            justify-content: center;

            div:nth-child(1) {
              display: none;
            }
          }

          span {
            display: none;
          }



        }
      }

    }



  }

  @media (min-width: 360px) and (max-width: 900px) {
    .menu {
      position: absolute;
      width: 100%;

      #logo-company {
        height: 9%;
        padding-left: 5vw ;
        img {
          width: 30vw;
        }
      }
    }

    .menuOff {
      width: 10%;
    }
  }


</style>
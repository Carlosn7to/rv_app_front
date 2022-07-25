<template>
  <div id="menu">
    <div id="logo-company">
      <img :src="require('@/assets/company/logo_azul_laranja.png')" alt="logo-age">
    </div>
    <div id="content-menu">
      <nav>
        <ul class="href-menu">
          <span>Ações</span>
          <router-link to="/home" exact-active-class="">
            <li>
              <div></div>
              <div>
                <i class="fi fi-rr-home"></i>
              </div>
              <span>Home</span>
            </li>
          </router-link>
          <router-link to="/minhas-vendas" exact-active-class="">
            <li>
              <div></div>
              <div>
                <i class="fi fi-rr-chart-histogram"></i>
              </div>
              <span>Minhas vendas</span>
            </li>
          </router-link>
        </ul>
          <ul class="href-menu">
            <span>Ações</span>
            <router-link to="/gerenciamento" exact-active-class="">
              <li>
                <div></div>
                <div>
                  <i class="fi fi-rr-settings-sliders"></i>
                </div>
                <span>Gerenciamento</span>
              </li>
            </router-link>
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
  name: "MenuMain"
}
</script>

<style scoped lang="scss">

  #menu {
    @include container(17%, 100%, 0, #FFF);
    border-right: 2px solid #cccccc90;

    #logo-company {
        @include container(100%, 10%, 0, #fff);
        @include flex(row, center, center, 0);
        border-bottom: 2px solid $border;

        img {
          width: 35%;
          height: auto;
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

</style>
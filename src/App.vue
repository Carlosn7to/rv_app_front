<template>
  <router-view/>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
*,
::before,
::after{
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  text-decoration: none !important;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  list-style: none;
  box-sizing: border-box;
  overflow: hidden;
  letter-spacing: .5px;
}

html {
  font-size: 62.5%;
}


/*   PLACEHOLDER   */
::-webkit-input-placeholder {
  color: #33333350;
  font-weight: 600;
  font-size: 1.4rem;
}

/*
  Loading
 */

.c-loader {
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #fa860d;
  height: 50px;
  width: 50px;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}

.loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*   SCROLL BAR   */
::-webkit-scrollbar-track {
  background-color: #F4F4F4;
}
::-webkit-scrollbar {
  width: 2px;
  background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
  background: #dad7d7;
}

/*
  Super Class
 */

#modal {
  @include container(100vw, 100vh, 0, rgba(3,3,3, 0.3));
  @include flex(row, center, center, 0);
  position: absolute;
  top: 0;
  left: 0;

  #card-modal {
    @include container(30vw, 50vh, 1vh 0, #FFF);
    border-radius: 10px;
    @include expand-animation;
  }
}



#app {
  width: 100vw;
  height: 100vh;
  background-color: $background;

  #container {
    @include container(100%, 100%, 0 2vw 0 0, $background);
    @include flex(row, space-between, initial, 2vw);

    #content {
      @include container(100%, 100%, 2vh 0, $background);

      #title-page {
        @include title-page
      }

      #content-page {
        @include content-page
      }
    }
  }
}

@media(min-width: 360px) and (max-width: 900px) {
  #app {
    #container {
      #content {
        padding: 2vh 5vw 2vh 13vw;

        #content-page {
          max-height: 90%;
          height: initial;
        }
      }
    }
  }
}

</style>

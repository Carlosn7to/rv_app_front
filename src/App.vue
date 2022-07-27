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
}

html {
  font-size: 62.5% !important;
}


/*   PLACEHOLDER   */
::-webkit-input-placeholder {
  color: #33333370;
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

</style>

<template>
  <div id="box-msg" :class="{ 'success' : type === 'success', 'trigger' :  type === 'trigger' }">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "InfoMsg",
  props: {
    type: {
      required: true,
      type: String
    },
    msg: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped lang="scss">

  #box-msg {
    padding: 2vh 2vw;
    position: absolute;
    border-radius: 5px;
    bottom: 1vh;
    right: 1vw;
    color: #FFF;
    font-size: 1.4rem;
    font-weight: 500;
    animation: left forwards .3s;
  }

  @keyframes left {
    from {
      opacity: 0.7;
      transform: translateX(500px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .success {
    background-color: #47CAA2;
  }

  .trigger {
    background-color: $red;
  }

</style>
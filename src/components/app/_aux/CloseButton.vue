<template>
  <div>
    <i class="fi fi-sr-cross-small" @click="closePage"></i>
  </div>
</template>

<script>
export default {
  name: "CloseButton",
  methods: {
    closePage: function () {
      this.$emit('close-page')
    }
  }
}
</script>

<style scoped lang="scss">

  div {
    display: flex;
    justify-content: flex-end;
    padding: 0 1vw;

    i {
      font-size: 3rem;
      color: $text;
      @include transtion;
      cursor: pointer;

      &:hover {
        color: $red;
      }
    }
  }
</style>
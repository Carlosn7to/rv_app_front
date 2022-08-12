<template>
  <div>
    <h1>Ops... Você não pode acessar está pagina!</h1>
  </div>
</template>

<script>
export default {
  name: "NoAccess"
}
</script>

<style scoped lang="scss">

div {
  @include container(100vw, 100vh, 0, transparent);
  @include flex(row, center, center, 0);
}
</style>
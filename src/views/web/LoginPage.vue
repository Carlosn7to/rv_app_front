<template>
  <div id="container">
    <CardLogin/>

  </div>
</template>

<script>

import CardLogin from "@/components/web/CardLogin";

export default {
  name: "LoginPage",
  components: {
    CardLogin
  }
}
</script>

<style scoped lang="scss">

#container {
  @include container(100%, 100%, 0, $background);
  @include flex(row, center, 0, 0);
}

</style>
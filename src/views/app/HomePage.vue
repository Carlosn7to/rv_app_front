<template>
  <div id="container">
    <MenuMain/>
  </div>
</template>

<script>

import MenuMain from "@/components/app/MenuMain";

export default {
  name: "HomePage",
  components: {
    MenuMain
  }
}
</script>

<style scoped lang="scss">

  #container {
    @include container(100%, 100%, 0, $background)
  }

</style>
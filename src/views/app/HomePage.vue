<template>
  <div id="container">
    <MenuMain/>
    <div id="content">
      <h1 id="title-page">Página inicial</h1>
    </div>
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



</style>
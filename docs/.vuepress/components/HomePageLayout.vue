<template>
  <div style="height:100%;width:100%">
    <Navbar/>
    <img src="../public/assets/logo.png" />
    <img src="../public/assets/logo.png" />
    <a-rate v-model="value" />
  </div>
</template>
<script>
import Navbar from '@theme/components/Navbar.vue'
export default {
    components: {
    Navbar
  },

  data() {
    return {
      value: 2,
    };
  },
};
</script>
<style scoped>
</style>
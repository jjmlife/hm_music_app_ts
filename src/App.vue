<template>
  <div id="app">
    <router-view />
    <!-- tabbar -->
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from "@/layout/main-tabbar";

export default {
  components: {
    MainTabbar,
  },
  mounted() {},
  methods: {},
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>

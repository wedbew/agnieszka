<template>
  <div id="app">
    <Home v-if="isLoaded" />
    <!-- <router-view/> -->
  </div>
</template>
<script>
import Home from './views/Home.vue';
import Loader from './components/Loader.vue';

export default {
  components: {
    Home,
    Loader,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    window.addEventListener('load', () => {
      this.isLoaded = true;
    });
  },
};
</script>
<style lang="scss">
  @use "../src/style/reset.css";
  @use "../src/style/common.scss";
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700;900&display=swap');
  @import url('https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css');
</style>

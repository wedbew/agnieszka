<template>
  <div class="about" v-observe-visibility="visibilityChanged"></div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      this.$store.commit('changeCurrentTab', 'about');
    },
  },
};
</script>
<style lang="scss" scoped>
  .about {
    width: 100%;
    height: 100vh;
  }
</style>

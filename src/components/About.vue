<template>
  <div
    class="about"
    data-aos="fade-in" data-aos-delay="1000"
    v-observe-visibility="{
      callback: visibilityChanged,
      threshold: 1,
    }"
  >
    <Heading
      title="About"
      paragraph="Excepteur sint occaecat cupidatat non proident,
       sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis iste natus"
    />
  </div>
</template>
<script>
import Heading from './Heading.vue';

export default {
  components: {
    Heading,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      if (this.isVisible) {
        this.$store.commit('changeCurrentTab', 'About');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  .about {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>

<template>
  <div
    class="contact p-xl-tb"
    data-aos="fade-up"
    daata-aos-delay="500"
    v-observe-visibility="{
      callback: visibilityChanged,
      threshold: 1,
    }"
  >
    <Heading
      title="Contact"
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
        this.$store.commit('changeCurrentTab', 'Contact');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  .contact {
    width: 100%;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>

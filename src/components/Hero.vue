<template>
  <main class="hero" v-observe-visibility="visibilityChanged">
    <div class="hero-content">
      <h2 class="hero-heading">I'm Agnieszka</h2>
      <vue-typer
        class="hero-text"
        :text='text'
        :pre-type-delay='1000'
      ></vue-typer>
      <Button>Hello</Button>
    </div>
    <div class="hero-wrapper">
      <img class="hero-bg" src="../assets/shape.svg">
      <img class="hero-image" src="../assets/img.png" alt="img">
    </div>
  </main>
</template>
<script>
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      text: 'Copy Writer',
      isVisible: true,
    };
  },
  created() {
    const primary = this.text;
    setTimeout(() => {
      this.text = 'Frontend developer';
    }, 4000);
    setTimeout(() => {
      this.text = primary;
    }, 9000);
  },
  methods: {
    inViewport() {
      // eslint-disable-next-line
      console.log('Hero');
    },
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      this.$store.commit('changeCurrentTab', 'hero');
    },
  },
};
</script>
<style lang="scss" scoped>
  @use '../style/colors';
  .hero {
    background-color: colors.$c-grey;
    max-width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    padding: 0 200px;
    &-content {
      height: 300px;
      width: 50%;
    }
    &-wrapper {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      position: relative;
    }
    &-bg {
      position: absolute;
      z-index: 1;
      opacity: 0.6;
    }
    &-heading {
      font-size: 5rem;
      font-weight: 700;
      margin-bottom: 30px;
    }
    &-text {
      font-size: 2rem;
      display: block;
      margin-bottom: 30px;
    }
    &-image {
      height: 700px;
      width: auto;
      z-index: 2;
    }
  }
</style>

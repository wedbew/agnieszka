<template>
  <main
    class="hero"
    v-observe-visibility="{
      callback: visibilityChanged,
    }"
  >
    <img class="hero-video" v-if="!isLoaded" src="../assets/Loading.png" />
    <video v-show="isLoaded" autoplay muted loop class="hero-video">
      <source
      src="../assets/Typewriter.mp4"
      type="video/mp4"
    >
    </video>
    <div class="hero-content" data-aos="fade-in" data-aos-delay="500">
      <h2 class="hero-heading">I'm Agnieszka</h2>
      <p id="typewriter" class="hero-text"></p>
      <Button>Hello</Button>
    </div>
    <!-- <div class="hero-wrapper"> -->
      <!-- <img class="hero-bg" src="../assets/shape.svg"> -->
      <!-- <img class="hero-image" src="../assets/img.png" alt="img"> -->
    <!-- </div> -->
  </main>
</template>
<script>
import Typewriter from 'typewriter-effect/dist/core';
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      isLoaded: false,
      isVisible: true,
      typewriter: null,
    };
  },
  created() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 3000);
  },
  mounted() {
    this.type();
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      if (this.isVisible) {
        this.$store.commit('changeCurrentTab', 'Home');
      }
    },
    onVideoLoad() {
      this.isLoaded = true;
    },
    type() {
      this.typewriter = new Typewriter('#typewriter', {
        strings: ['Hello', 'World'],
        pauseFor: 1000,
        loop: true,
        autoStart: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  @use '../style/colors';
  .hero {
    background-color: colors.$c-grey;
    max-width: 100%;
    height: calc(100vh - 48px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 200px;
    position: relative;
    &-video {
      position: absolute;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    &-content {
      height: 300px;
      width: 50%;
      z-index: 2;
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
      z-index: 2;
      opacity: 0.6;
    }
    &-heading {
      color: colors.$c-white;
      font-size: 5rem;
      font-weight: 700;
      margin-bottom: 30px;
    }
    &-text {
      color: colors.$c-white;
      font-size: 2rem;
      display: block;
      margin-bottom: 30px;
      * {
        background-color: colors.$c-white !important;
      }
    }
    &-image {
      height: 700px;
      width: auto;
      z-index: 3;
    }
  }
</style>

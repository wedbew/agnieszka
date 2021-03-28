<template>
  <main
    id="home"
    class="hero"
  >
    <!-- <video muted loop id="video" class="hero-video">
      <source
      src="../assets/Typewriter.mp4"
      type="video/mp4"
    >
    </video> -->
    <div class="hero-content">
      <h2
        class="hero-heading"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="500"
      >
        Jestem Agnieszka
      </h2>
      <p
        id="typewriter"
        class="hero-text"
        data-aos="fade-right"
        data-aos-delay="1100"
        data-aos-duration="500"
      >
      </p>
      <div
        data-aos="fade-right"
        data-aos-delay="1200"
        data-aos-duration="500"
      >
        <Button black>Skontaktuj się ze mną</Button>
      </div>
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
    // this.isVedoLoaded();
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
        strings: ['Współpracujmy razem', 'Albo nie, wypchaj się'],
        pauseFor: 1000,
        loop: true,
        autoStart: true,
      });
    },
    isVedoLoaded() {
      const video = document.querySelector('#video');
      video.addEventListener('loadeddata', () => {
        if (video.readyState === 4) {
          video.play();
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  @use '../style/colors';
  .hero {
    background-color: colors.$c-white;
    max-width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 200px;
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
      color: colors.$c-black;
      font-size: 5rem;
      font-weight: 700;
      margin-bottom: 30px;
    }
    &-text {
      color: colors.$c-black;
      font-size: 2rem;
      display: block;
      margin-bottom: 30px;
    }
    &-image {
      height: 700px;
      width: auto;
      z-index: 3;
    }
  }
</style>

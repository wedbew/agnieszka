<template>
  <div class="home">
    <Navigation />
    <Hero />
    <About />
  </div>
</template>
<script>
import Navigation from '../components/Navigation.vue';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';

export default {
  components: {
    Navigation,
    Hero,
    About,
  },
};
</script>

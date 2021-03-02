<template>
  <div class="home">
    <Navigation />
    <Hero />
    <About />
    <Contact />
  </div>
</template>
<script>
import Navigation from '../components/Navigation.vue';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

export default {
  components: {
    Navigation,
    Hero,
    About,
    Contact,
  },
};
</script>

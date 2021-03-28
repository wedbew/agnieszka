<template>
  <div class="home">
    <Navigation />
    <Hero />
    <About />
    <Experience />
    <Contact />
    <Portfolio />
    <CallToAction />
    <Footer />
  </div>
</template>
<script>
import Navigation from '../components/Navigation.vue';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Portfolio from '../components/Portfolio.vue';
import Experience from '../components/Experience.vue';
import CallToAction from '../components/CallToAction.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navigation,
    Hero,
    About,
    Contact,
    Portfolio,
    Experience,
    CallToAction,
    Footer,
  },
};
</script>

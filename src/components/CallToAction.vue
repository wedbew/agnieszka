<template>
  <section class="cta p-xl-tb">
    <Heading
      title="Have Any Project In Mind?"
      white
      :min-height="300"
    >
      <div class="cta-scene" slot="top">
        <Lines
          class="heading-image"
          data-depth="0.2"
          white
          :width="700"
          :top="10"
          :left="20"
        />
        <Circles
          class="heading-image"
          white
          :height="400"
          :top="50"
          :left="95"
        />
        <Cross
          class="heading-image"
          white
          :width="200"
          :top="80"
          :left="10"
        />
        <Dots
          class="heading-image"
          white
          :width="900"
          :top="70"
          :left="50"
        />
        <Triangle
          class="heading-image"
          white
          :width="200"
          :top="80"
          :left="70"
        />
      </div>
      <Button slot="bottom" tertiary>Hire Me</Button>
    </Heading>
  </section>
</template>

<script>
import Parallax from 'parallax-js';
import Button from './Button.vue';
import Heading from './Heading.vue';
import Circles from './Shapes/Circles.vue';
import Cross from './Shapes/Cross.vue';
import Dots from './Shapes/Dots.vue';
import Lines from './Shapes/Lines.vue';
import Triangle from './Shapes/Triangle.vue';

export default {
  components: {
    Heading,
    Button,
    Circles,
    Cross,
    Dots,
    Lines,
    Triangle,
  },
  data() {
    return {
      parallax: null,
    };
  },
  mounted() {
    // this.createParallax();
  },
  methods: {
    createParallax() {
      this.parallax = new Parallax(document.querySelector('.cta-scene'), {
        relativeInput: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/colors';
  @use '../style/spacing';

  .cta {
    width: 100%;
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: colors.$c-gold;
    background-image: linear-gradient(315deg, colors.$c-gold 0%, colors.$c-gold-light 74%);

    &-scene {
      width: 100%;
      height: 100%;
    }
  }
</style>

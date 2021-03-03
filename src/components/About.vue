<template>
  <div
    class="about p-xl-tb"
    v-observe-visibility="{
      callback: visibilityChanged,
      threshold: 1,
    }"
  >
    <div class="about-wrapper">
      <div
        class="about-title"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <Heading
          title="About"
          :min-height="350"
        >
          <Lines slot="top" class="heading-image" />
        </Heading>
      </div>
      <div
        class="about-content"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        <p class="t-p m-xl-b">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Debitis consectetur quo alias sapiente saepe ea reiciendis.
          Voluptas eveniet vitae sed delectus autem eum nesciunt quibusdam
          quasi corrupti aliquam. Porro, ex.
        </p>
        <p class="t-p m-xl-b">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Debitis consectetur quo alias sapiente saepe ea reiciendis.
          Voluptas eveniet vitae sed delectus autem eum nesciunt quibusdam
          quasi corrupti aliquam. Porro, ex.
        </p>
        <Button class="m-xl-t m-xl-r">Hello</Button>
        <Button secondary>World</Button>
      </div>
    </div>
  </div>
</template>
<script>
import Heading from './Heading.vue';
import Button from './Button.vue';
import Lines from './Shapes/Lines.vue';

export default {
  components: {
    Heading,
    Button,
    Lines,
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
  @use '../style/typography';
  @use '../style/colors';
  @use '../style/spacing';

  .about {
    width: 100%;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: colors.$c-grey;
    &-wrapper {
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-title, &-content {
      width: 50%;
    }
    &-content {
      .t-p {
        color: colors.$c-grey-light;
      }
    }
  }
</style>

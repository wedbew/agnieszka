<template>
  <div
    class="experience p-xl-tb"
    v-observe-visibility="{
      callback: visibilityChanged,
      threshold: 1,
    }"
  >
    <Heading
      class="m-xl-b"
      data-aos="fade-up"
      data-aos-delay="500"
      title="Work Experiences"
      paragraph="Excepteur sint occaecat cupidatat non proident,
       sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis iste natus"
    />
    <Tiles
      data-aos="fade-up"
      data-aos-delay="700"
      class="m-xl-tb experience-tiles"
      :items="tiles"
    />
  </div>
</template>
<script>
import Heading from './Heading.vue';
import Tiles from './Tiles.vue';

export default {
  components: {
    Heading,
    Tiles,
  },
  data() {
    return {
      isVisible: false,
      tiles: [
        {
          date: 'June 2012 - 2016',
          position: 'UI/UX Designer',
          company: 'Adobe Inc.',
          description: 'Excepteur sint occaecat cupidatat non proident,',
        },
        {
          date: 'June 2012 - 2016',
          position: 'UI/UX Designer',
          company: 'Adobe Inc.',
          description: 'Excepteur sint occaecat cupidatat non proident,',
        },
        {
          date: 'June 2012 - 2016',
          position: 'UI/UX Designer',
          company: 'Adobe Inc.',
          description: 'Excepteur sint occaecat cupidatat non proident,',
        },
      ],
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      if (this.isVisible) {
        this.$store.commit('changeCurrentTab', 'Experience');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  @use '../style/colors';
  @use '../style/spacing';

  .experience {
    width: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: colors.$c-grey;
  }
</style>

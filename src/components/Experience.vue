<template>
  <div
    id="experience"
    class="experience p-xl-tb"
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
      @modalContent="setModalContent($event)"
    />
    <modal
      class="modal"
      name="modal"
      :adaptive="false"
      :scrollable="true"
      :resizable="false"
      height="auto"
    >
      <div class="modal-content m-m-lr">
        <!-- <img class="modal-image" :src="'../assets/reference/' + index + '.jpg'"> -->
        <img v-if="index === 1" class="modal-image" src="../assets/reference/1.jpg">
        <img v-if="index === 2" class="modal-image" src="../assets/reference/2.jpg">
        <img v-if="index === 3" class="modal-image" src="../assets/reference/3.jpg">
      </div>
    </modal>
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
      index: null,
      tiles: [
        {
          index: 1,
          date: 'June 2012 - 2016',
          position: 'UI/UX Designer',
          company: 'Adobe Inc.',
          description: 'Excepteur sint occaecat cupidatat non proident,',
          reference: '1.jpg',
        },
        {
          index: 2,
          date: 'June 2012 - 2016',
          position: 'UI/UX Designer',
          company: 'Adobe Inc.',
          description: 'Excepteur sint occaecat cupidatat non proident,',
          reference: '2.jpg',
        },
        {
          index: 3,
          date: 'June 2012 - 2016',
          position: 'UI/UX Designer',
          company: 'Adobe Inc.',
          description: 'Excepteur sint occaecat cupidatat non proident,',
          reference: '3.jpg',
        },
      ],
    };
  },
  methods: {
    setModalContent(index) {
      this.index = index;
      this.$modal.show('modal');
    },
    renderSrc() {
      return `../assets/reference/${this.modalContent}.jpg`;
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
    // background-color: colors.$c-grey;
  }

  .modal {
    &-content {
      display: flex;
      justify-content: center;
      min-height: 800px;
    }

    &-image {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
</style>

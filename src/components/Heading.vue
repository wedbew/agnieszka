<template>
  <div
    class="heading"
    :style="{ minHeight: minHeight + 'px' }"
  >
    <slot name="top" />
    <h2
      class="heading-title"
      :class="{ 'heading-title-white' :white }"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      {{ title }}
    </h2>
    <p
      class="heading-paragraph"
      :class="{ 'heading-paragraph-white' :white }"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      {{ paragraph }}
    </p>
    <slot name="bottom" />
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: false,
    },
    minHeight: {
      type: Number,
      required: false,
    },
    white: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/colors';
  @use '../style/typography';

  .heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    &-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      opacity: 0.15;
      z-index: 0;
    }
    &-title {
      text-align: center;
      margin-bottom: 50px;
      position: relative;
      max-width: 750px;
      @include typography.h2();
      &::after {
        position: absolute;
        content: '';
        width: 100px;
        left: 0;
        bottom: -20px;
        height: 4px;
        background-color: colors.$c-gold;
        right: 0;
        margin: 0 auto;
      }
      &-white {
        color: colors.$c-white;
        &::after {
          background-color: colors.$c-white;
        }
      }
    }
    &-paragraph {
      text-align: center;
      max-width: 750px;
      @include typography.paragraph();
    }
  }
</style>

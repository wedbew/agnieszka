<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    :class="{ 'svg-white' : white, 'svg-absolute' : top || left }"
    :style="{ top: top + '%', left: left + '%', width: width + 'px' }"
  >
    <polygon class="st0" points="36.6,10.7 25.7,21.6 14.8,10.7
    6.3,19.3 17.2,30.1 6.3,41 14.8,49.5 25.7,38.6
      36.6,49.5 45.1,41 34.2,30.1 45.1,19.3"/>
    <polygon class="st1" points="35.2,2.5 24.3,13.4 13.4,2.5
    4.9,11 15.8,21.9 4.9,32.7 13.4,41.3 24.3,30.4
      35.2,41.3 43.7,32.7 32.8,21.9 43.7,11"/>
  </svg>
</template>
<script>
export default {
  props: {
    white: {
      type: Boolean,
      required: false,
    },
    top: {
      type: Number,
      required: false,
    },
    left: {
      type: Number,
      required: false,
    },
    width: {
      type: Number,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
  @use '../../style/colors';

  .svg-white {
    .st0, .st1 {
      fill: colors.$c-white !important;
    }
  }

  .st0 {
    fill: colors.$c-black;
  }
  .st1 {
    fill: none;
    stroke: colors.$c-gold;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
</style>

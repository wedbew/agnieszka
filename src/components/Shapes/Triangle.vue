<template>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 50 50"
  class="svg"
  :class="{ 'svg-white' : white, 'svg-absolute' : top || left }"
  :style="{ top: top + '%', left: left + '%', width: width + 'px' }"
>
  <defs>
    <rect id="SVGID_1_" x="7.2" width="35.7" height="50"/>
  </defs>
  <clipPath id="SVGID_2_">
    <use xlink:href="#SVGID_1_" style="overflow:visible;"/>
  </clipPath>
  <polygon class="st0" points="13.4,34.1 40,50 42.8,8"/>
  <g class="st1">
    <defs>
      <rect id="SVGID_3_" x="7.2" y="0" width="35.7" height="50"/>
    </defs>
    <clipPath id="SVGID_4_">
      <use xlink:href="#SVGID_3_" style="overflow:visible;"/>
    </clipPath>
    <polygon class="st2" points="7.9,24.5 39.2,0.7 33.1,42.4"/>
    <path class="st2" d="M39.2,0.7c-0.5,0.6-15.5,24.7-15.5,24.7l9.5,17L39.2,0.7z"/>
    <polygon class="st2" points="7.9,24.5 23.6,25.4 39.2,0.7"/>
  </g>
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

  .svg {
    height: auto;
    &-white {
      .st0, .st1, .st2 {
        stroke: colors.$c-white !important;
      }
    }

    &-absolute {
      position: absolute;
    }
  }

  .st0 {
    clip-path: url(#SVGID_2_);
    fill: colors.$c-gold;
  }
  .st1{
    clip-path: url(#SVGID_2_);
  }
  .st2 {
    clip-path: url(#SVGID_4_);
    fill: none;
    stroke: colors.$c-black;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
</style>

<template>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 50 50"
  class="svg"
  :class="{ 'svg-white' : white, 'svg-absolute' : top || left }"
  :style="{ top: top + '%', left: left + '%', height: height + 'px' }"
>
  <defs>
    <rect id="SVGID_1_" x="0" width="50" height="50"/>
  </defs>
  <clipPath id="SVGID_2_">
    <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
  </clipPath>
  <g class="st0">
    <defs>
      <rect id="SVGID_3_" x="0" width="50" height="50"/>
    </defs>
    <clipPath id="SVGID_4_">
      <use xlink:href="#SVGID_3_"  style="overflow:visible;"/>
    </clipPath>
    <path
      class="st1"
      d="M34.1,50c-8.8,0-15.9-7.1-15.9-15.9s7.1-15.9,15.9-15.9
      S50,25.4,50,34.1S42.9,50,34.1,50 M34.1,25.7
      c-4.6,0-8.4,3.8-8.4,8.4s3.8,8.4,8.4,8.4s8.4-3.8,8.4-8.4
      S38.7,25.7,34.1,25.7"
    />
    <path
      class="st2"
      d="M16.8,32.7c-8.8,0-15.9-7.1-15.9-15.9S8.1,0.9,16.8,0.9
      s15.9,7.1,15.9,15.9S25.6,32.7,16.8,32.7z M16.8,8.4
        c-4.6,0-8.4,3.8-8.4,8.4s3.8,8.4,8.4,8.4s8.4-3.8,8.4-8.4
        S21.5,8.4,16.8,8.4z"
    />
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
    height: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  @use '../../style/colors';

  .svg {
    width: auto;
    &-white {
      .st0, .st1, .st2 {
        fill: colors.$c-white !important;
      }
    }
  }

  .st0 {
    clip-path: url(#SVGID_2_);
  }
  .st1 {
    clip-path: url(#SVGID_4_);
    fill: colors.$c-black;
  }
  .st2 {
    clip-path: url(#SVGID_4_);
    fill: none;
    stroke: colors.$c-gold;
    stroke-width: 2;
    stroke-miterlimit: 10;
  }
</style>

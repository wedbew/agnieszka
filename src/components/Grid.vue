<template>
  <div
    class="cv-grid"
    :class="[
      `bx--grid`,
      {
        [`bx--grid--full-width`]: fullWidth,
        [`bx--grid--condensed`]: kind === 'condensed',
        [`bx--grid--narrow`]: kind === 'narrow',
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    fullWidth: Boolean,
    kind: {
      type: String,
      default: 'wide',
      validator: val => ['wide', 'narrow', 'condensed'].includes(val),
    },
  },
};
</script>

<template>
  <div
    class="cv-row"
    :class="[
      `bx--row`,
      {
        [`bx--row--condensed`]: kind === 'condensed',
        [`bx--row--narrow`]: kind === 'narrow',
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    kind: {
      type: String,
      default: 'wide',
      validator: val => ['wide', 'narrow', 'condensed'].includes(val),
    },
  },
};
</script>

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
import carbonPrefixMixin from '../../mixins/carbon-prefix-mixin';
export default {
  name: 'CvRow',
  mixins: [carbonPrefixMixin],
  props: {
    kind: {
      type: String,
      default: 'wide',
      validator: val => ['wide', 'narrow', 'condensed'].includes(val),
    },
  },
};
</script>

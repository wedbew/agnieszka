<template>
  <span class="tag p-m-lr p-s-tb t-w-b" :class="{ 'tag--active' : active }">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @use '../style/colors';
  @use '../style/spacing';
  @use '../style/typography';

  .tag {
    background: colors.$c-black;
    border-radius: 3px;
    color: colors.$c-white;
    font-size: 0.875rem;
    &--active {
      background: colors.$c-white;
      border: 2px solid colors.$c-black;
      color: colors.$c-white;
      color: colors.$c-black;
    }
  }
</style>

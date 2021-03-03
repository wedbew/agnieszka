<template>
  <button :class="{ 'btn-secondary' : secondary, 'btn-tertiary' : tertiary }" class="btn">
    <slot/>
  </button>
</template>
<script>
export default {
  props: {
    secondary: {
      type: Boolean,
      default: false,
    },
    tertiary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
  @use '../style/colors';
  .btn {
    background-color: colors.$c-gold;
    border: 2px solid colors.$c-gold;
    border-radius: 3px;
    padding: 15px 40px;
    font-size: 1rem;
    font-weight: 600;
    color: colors.$c-white;
    transition: background-color 250ms ease-in-out;
    z-index: 1;
    &:hover {
      color: colors.$c-gold;
      background-color: transparent;
      border: 2px solid colors.$c-gold;
    }

    &-secondary {
      color: colors.$c-gold;
      background-color: transparent;

      &:hover {
        color: colors.$c-white !important;
        background-color: colors.$c-gold !important;
      }
    }

    &-tertiary {
      color: colors.$c-gold;
      background-color: colors.$c-white;
      border-radius: 5px;

      &:hover {
        color: colors.$c-white !important;
        background-color: colors.$c-black !important;
      }
    }

  }
</style>

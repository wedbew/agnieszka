<template>
  <a
    v-if="link"
    :class="{ 'btn-secondary' : secondary, 'btn-tertiary' : tertiary, 'btn-black' : black }"
    class="btn"
    :href="link"
  >
    <slot/>
  </a>
  <button
    v-else
    :class="{ 'btn-secondary' : secondary, 'btn-tertiary' : tertiary, 'btn-black' : black }"
    class="btn"
    @click="$emit('btnIndex', index ? index : 'hello')"
  >
    <slot/>
  </button>
</template>
<script>
export default {
  props: {
    secondary: {
      type: Boolean,
      default: false,
      required: false,
    },
    tertiary: {
      type: Boolean,
      default: false,
      required: false,
    },
    black: {
      type: Boolean,
      default: false,
      required: false,
    },
    link: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      required: false,
    },
  },
  methods: {
    clicked() {
      if (this.index) {
        this.$emit('btnIndex', this.index);
      }
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
    text-decoration: none;
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

    &-black {
      color: colors.$c-black;
      background-color: colors.$c-white;
      border: 2px solid colors.$c-black;
      border-radius: 0;

      &:hover {
        color: colors.$c-white !important;
        background-color: colors.$c-black !important;
        border: 2px solid colors.$c-black;
      }
    }

  }
</style>

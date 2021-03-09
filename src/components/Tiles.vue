<template>
  <div class="tiles container">
    <div
      v-for="(item, index) in items"
      :key="index" class="p-xl-all tiles-item"
    >
      <h5 class="t-h-5 m-m-b">{{ item.date }}</h5>
      <h4 class="t-h-4 m-m-b">{{ item.position }}</h4>
      <h5 class="t-h-5 m-xl-b">{{ item.company }}</h5>
      <p class="t-p">{{ item.description }}</p>
      <Button
        @btnIndex="setModalContent($event)"
        :index="item.index"
        class="m-xl-t"
        black
      >
        Reference
      </Button>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setModalContent($event) {
      this.$emit('modalContent', $event);
    },
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/colors';
  @use '../style/spacing';
  @use '../style/typography';
  .tiles {
    display: flex;
    &-item {
      cursor: pointer;
      border: 1px solid rgba(colors.$c-grey-light, 0.3);
      background-color: colors.$c-white;
      min-height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: background-color 250ms ease-in-out;
      &:first-of-type {
        border-right: unset;
      }
      &:last-of-type {
        border-left: unset;
      }
      &:hover {
        background-color: colors.$c-gold;
      }
      .t-h-5 {
        font-weight: 400;
        font-size: 1rem;
        color: colors.$c-grey-dark;
      }
    }
  }
</style>

<template>
  <div class="heading">
    <h2 class="heading-title">{{ title }}</h2>
    <p class="heading-paragraph">{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  @use '../style/colors';

  .heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-title {
      font-size: 3rem;
      font-weight: 700;
      color: colors.$c-black;
      letter-spacing: 0.05rem;
      text-align: center;
      margin-bottom: 50px;
      position: relative;
      max-width: 750px;
      &::after {
        position: absolute;
        content: '';
        width: 100px;
        left: 0;
        bottom: -20px;
        height: 4px;
        background-color: colors.$c-gold;
        right: 0;
        margin: 0 auto;
      }
    }
    &-paragraph {
      color: colors.$c-grey-dark;
      line-height: 1.8rem;
      text-align: center;
      font-size: 1.25rem;
      max-width: 750px;
    }
  }
</style>

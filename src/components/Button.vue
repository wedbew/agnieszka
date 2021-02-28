<template>
  <button class="btn">
    <slot/>
  </button>
</template>
<style lang="scss" scoped>
  @use '../style/colors';
  .btn {
    background-color: colors.$c-gold;
    border: 2px solid colors.$c-gold;
    padding: 10px 30px;
    font-size: 1.25rem;
    font-weight: 700;
    color: colors.$c-white;
    transition: background-color 250ms ease-in-out;
    &:hover {
      color: colors.$c-gold;
      background-color: colors.$c-white;
      border: 2px solid colors.$c-gold;
    }
  }
</style>

<template>
  <footer class="footer">
    <p class="t-p p-l-tb">&copy; 2021</p>
  </footer>
</template>

<style lang="scss" scoped>
  @use '../style/colors';
  @use '../style/typography';
  @use '../style/spacing';
  .footer {
    background-color: colors.$c-black;
    width: 100%;
    .t-p {
      color: colors.$c-white;
      text-align: center;
    }
  }
</style>

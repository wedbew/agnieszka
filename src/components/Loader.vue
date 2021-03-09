<template>
  <div class="loader">
    <img src="../assets/loader.gif" alt="Loader">
  </div>
</template>

<style lang="scss" scoped>

  .loader {
    min-height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    background-color: #FFA769;
    position: fixed;
    z-index: 10000;
  }

</style>

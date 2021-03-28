<template>
  <div class="container">
    <scrollactive class="navbar" active-class="navbar-link-active">
      <div class="navbar-header">
          <!-- <a href="/" class="navbar-link">A<span>T</span>.</a> -->
      </div>
      <ul class="navbar-menu">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="navbar-menu-item"
        >
          <a
            :href="'#' + item.en.toLowerCase()"
            class="navbar-link scrollactive-item">
            {{ item.en }}
          </a>
        </li>
      </ul>
    </scrollactive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          en: 'Home',
          pl: 'Home',
          active: true,
        },
        {
          en: 'About',
          pl: 'O mnie',
          active: false,
        },
        {
          en: 'Experience',
          pl: 'Doświadczenie',
          active: false,
        },
        {
          en: 'Contact',
          pl: 'Kontakt',
          active: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
  @use '../style/colors';

  .navbar {
    background-color: colors.$c-black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100vw;
    width: calc(100% - 40px);
    height: 20px;
    padding: 20px 20px 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0px 4px 10px 0px rgb(21 47 95 / 40%);

    &-header {
      .navbar-link {
        font-size: 3rem;
        font-weight: 700;
        color: colors.$c-gold;
        span {
          color: colors.$c-white;
          font-weight: 900;
        }
      }
    }
    &-menu {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
    }
    &-link {
      color: colors.$c-white;
      font-size: 1rem;
      line-height: 1.2;
      text-decoration: none;
      transition: color 250ms ease-in-out;
      padding: 0 30px;
      position: relative;

      &:last-of-type {
        padding-right: 0;
      }

      &::after {
        content: '';
        position: absolute;
        width: 0;
        transition: width 250ms ease-in-out;
        height: 2px;
        bottom: -5px;
        left: 30px;
        background-color: colors.$c-gold;
      }

      &:hover, &-active {
        color: colors.$c-gold;

         &::after {
           width: calc(100% - 30px);
         }
      }
    }
  }
</style>

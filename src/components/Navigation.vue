<template>
  <nav class="navbar">
    <div class="navbar-header">
        <!-- <a href="/" class="navbar-link">A<span>T</span>.</a> -->
    </div>
    <ul class="navbar-menu">
      <li v-for="(item, index) in menuItems"
        :key="index"
        id="item.en"
        class="navbar-menu-item"
      >
        <a
          href="#"
          class="navbar-link"
          :class="{'navbar-link-active' : item.active }"
        >
          {{ item.pl }}
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      activeTab: this.$store.state.currentTab,
      menuItems: [
        {
          en: 'Home',
          pl: 'Home',
          active: false,
        },
        {
          en: 'About',
          pl: 'O mnie',
          active: false,
        },
        {
          en: 'Contact',
          pl: 'Kontakt',
          active: false,
        },
        {
          en: 'Blog',
          pl: 'Blog',
          active: false,
        },
      ],
    };
  },
  computed: {
    currentTab() {
      return this.$store.state.currentTab;
    },
  },
  // watch: {
  //   currentTab(newVal) {
  //     this.activeTab = newVal;
  //     this.setActiveTab();
  //   },
  // },
  methods: {
    setActiveTab() {
      const activeTab = this.menuItems.filter((item) => item.en === this.activeTab);
      for (let i = 0; i < this.menuItems.length; i += 1) {
        this.menuItems[i].active = false;
      }
      activeTab[0].active = true;
    },
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
    max-width: 100%;
    padding: 20px 20px 10px;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0px 3px 8px 0px rgb(21 47 95 / 12%);

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
      height: 100%;
      align-items: center;
      padding-bottom: 10px;
      &-item {

      }
    }
    &-link {
      color: colors.$c-white;
      font-size: 1rem;
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

<template>
  <li :class="{ 'nav-item': true, 'menu-open': open }">
    <a :class="{ 'nav-link': true, active: active }" href="#" @click.prevent="toggle">
      <a-lte-icon :icon="icon" class="nav-icon" />
      <p>
        {{ title }}
        <a-lte-icon :icon="iconExpand" class="right" />
      </p>
    </a>
    <transition name="aside-dropdown" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <ul v-show="open" ref="dropdown" class="nav nav-treeview">
        <slot />
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: [String, Array],
      required: true,
    },
    iconExpand: {
      type: [String, Array],
      default: 'angle-left',
    },
    baseUrl: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      open: false,
      height: 0,
      activeBySuburl: false,
      activeByItem: false,
    };
  },
  computed: {
    active() {
      return this.activeBySuburl || this.activeByItem;
    },
  },
  watch: {
    $route: function checkSuburl() {
      this.activeBySuburl = this.$route.path.indexOf(this.baseUrl) === 0;
    },
  },
  mounted() {
    // It's not so good, but I don't know best way to detect active submenu :(
    this.activeByItem = this.$refs.dropdown.querySelectorAll('a.active').length !== 0;
    const observer = new MutationObserver((mutations) => {
      const filtered = mutations.filter(el => el.target.parentNode.parentNode === this.$refs.dropdown);
      if (filtered.length === 0) {
        return;
      }
      this.activeByItem = filtered.find(el => el.target.classList.contains('active')) !== undefined;
    });
    observer.observe(this.$refs.dropdown, { attributes: true, subtree: true, attributeFilter: ['class'] });
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    beforeEnter(el) {
      // Save destination height value by made el visible for short time
      el.style.height = 'auto';
      el.style.display = 'block';
      this.height = el.clientHeight;
      // And set invisible by height: 0
      el.style.height = 0;
    },
    enter(el) {
      // Timeout need for wait to apply css class by <transition>
      setTimeout(() => {
        el.style.height = `${this.height}px`;
      }, 30);
    },
    leave(el) {
      // Because menu-open class hide immediately
      el.style.display = 'block';
      // Timeout need for wait to apply css class by <transition>
      setTimeout(() => {
        el.style.removeProperty('height');
      }, 30);
    },
  },
};
</script>

<style>
.aside-dropdown-enter-active {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}
.aside-dropdown-leave-active {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}
.aside-dropdown-leave-to {
  height: 0;
}
</style>

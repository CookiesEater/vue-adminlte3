<template>
  <nav :class="['main-header', 'navbar', 'navbar-expand', `navbar-${type}`, `bg-${variant}`, borderClass]">
    <slot />
  </nav>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'light',
    },
    variant: {
      type: String,
      default: 'white',
    },
    borderBottom: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    borderClass() {
      return this.borderBottom ? 'border-bottom' : '';
    },
  },
};
</script>

<style>
/* AdminLTE template need min 1rem padding for better views */
.main-header.navbar-expand .navbar-nav .nav-link {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>

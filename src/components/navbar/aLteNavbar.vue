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

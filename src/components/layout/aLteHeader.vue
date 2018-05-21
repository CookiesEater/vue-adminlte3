<template functional>
  <header v-bind="data.attrs" :class="{ 'main-header': true, 'border-bottom': props.borderBottom }" v-on="listeners">
    <slot />
  </header>
</template>

<script>
export default {
  props: {
    borderBottom: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
/* AdminLTE template need min 1rem padding for better views */
.main-header .navbar .navbar-nav .nav-link {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>

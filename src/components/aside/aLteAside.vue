<template>
  <aside :class="['main-sidebar', `sidebar-${type}-${variant}`, elevationClass]">
    <slot />
  </aside>
</template>

<script>
import elevation from '../../mixins/elevation';

export default {
  mixins: [elevation()],
  props: {
    type: {
      type: String,
      default: 'dark',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    mini: {
      type: Boolean,
      default: false,
    },
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    if (this.mini) {
      document.body.classList.add('sidebar-mini');
    }
    if (this.collapse) {
      document.body.classList.add('sidebar-collapse');
    } else {
      document.body.classList.add('sidebar-open');
    }
  },
};
</script>

<template>
  <aside :class="['main-sidebar', `sidebar-${type}-${variant}`, elevationClass]">
    <slot />
  </aside>
</template>

<script>
import elevation from '../../mixins/elevation';

export default {
  mixins: [elevation],
  props: {
    type: {
      type: String,
      default: 'dark',
    },
    variant: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

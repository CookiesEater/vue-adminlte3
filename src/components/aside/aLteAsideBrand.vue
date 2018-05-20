<template>
  <router-link :to="to" class="brand-link">
    <img :src="logo" :srcset="`${logo2x || logo} 2x`" :class="['brand-image', 'img-circle', elevationClass]" :alt="header">
    <span class="brand-text font-weight-light">{{ header }}</span>
  </router-link>
</template>

<script>
import elevation from '../../mixins/elevation';

export default {
  mixins: [elevation],
  props: {
    logo: {
      type: String,
      required: true,
    },
    logo2x: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '/',
    },
    header: {
      type: String,
      default: '',
    },
  },
};
</script>

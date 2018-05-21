<template>
  <div class="user-panel mt-3 pb-3 mb-3 d-flex">
    <div class="image">
      <img :src="image" :srcset="`${image2x || image} 2x`" :class="['img-circle', elevationClass]" :alt="username">
    </div>
    <div class="info">
      <router-link :to="to">{{ username }}</router-link>
    </div>
  </div>
</template>

<script>
import elevation from '../../mixins/elevation';

export default {
  mixins: [elevation()],
  props: {
    image: {
      type: String,
      required: true,
    },
    image2x: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      default: '',
    },
  },
};
</script>

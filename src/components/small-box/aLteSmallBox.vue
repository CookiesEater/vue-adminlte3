<template>
  <div :class="['small-box', `bg-${variant}`]">
    <div class="inner">
      <slot />
    </div>
    <div class="icon">
      <a-lte-icon :icon="icon" />
    </div>
    <router-link v-if="to" :to="to" class="small-box-footer">
      {{ footer }}
      <slot name="footer" />
    </router-link>
    <div v-else class="small-box-footer">
      {{ footer }}
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: [String, Array],
      required: true,
    },
    variant: {
      type: String,
      default: 'info',
    },
    footer: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
  },
};
</script>

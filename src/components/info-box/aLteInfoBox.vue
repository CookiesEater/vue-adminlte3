<template>
  <div :class="['info-box', bgClass, elevationClass]">
    <div :class="['info-box-icon', bgIconClass]">
      <a-lte-icon :icon="icon" />
    </div>
    <div class="info-box-content">
      <div v-if="header" class="info-box-text">{{ header }}</div>
      <slot />
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
    header: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: null,
    },
    iconVariant: {
      type: String,
      default: null,
    },
    gradient: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    bgIconClass() {
      return this.iconVariant ? `bg-${this.iconVariant}` : '';
    },
    bgClass() {
      if (!this.variant) {
        return '';
      }
      return this.gradient ? `bg-${this.variant}-gradient` : `bg-${this.variant}`;
    },
  },
};
</script>

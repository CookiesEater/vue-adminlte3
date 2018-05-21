<template>
  <transition-group :name="transition" class="breadcrumb" tag="ol">
    <li v-for="(item, index) in list" :key="item.path" :class="{ 'breadcrumb-item': true, active: isLast(index) }">
      <template v-if="isLast(index)">{{ showName(item) }}</template>
      <router-link v-else :to="item">{{ showName(item) }}</router-link>
    </li>
  </transition-group>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    transition: {
      type: String,
      default: 'breadcrumb',
    },
  },
  methods: {
    isLast(index) {
      return index === this.list.length - 1;
    },
    showName(item) {
      if (item.meta && item.meta.label) {
        return item.meta.label;
      }
      if (item.name) {
        return item.name;
      }

      return '';
    },
  },
};
</script>

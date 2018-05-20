<template>
  <li class="nav-item">
    <router-link :to="to" active-class="active" class="nav-link" exact>
      <a-lte-icon :icon="icon" class="nav-icon" />
      <p>
        {{ title }}
        <span v-if="badge" :class="['right', 'badge', `badge-${badgeVariant}`]">{{ badge }}</span>
      </p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    icon: {
      type: [String, Array],
      default: 'circle',
    },
    badge: {
      type: String,
      default: '',
    },
    badgeVariant: {
      type: String,
      default: 'danger',
    },
  },
};
</script>

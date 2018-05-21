<template functional>
  <li class="nav-header">{{ props.title }}</li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

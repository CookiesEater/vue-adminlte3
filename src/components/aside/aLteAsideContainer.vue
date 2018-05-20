<template functional>
  <div v-bind="data.attrs" class="sidebar" v-on="listeners">
    <slot />
  </div>
</template>

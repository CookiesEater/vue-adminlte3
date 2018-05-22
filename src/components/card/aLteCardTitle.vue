<template functional>
  <h3 v-bind="data.attrs" class="card-title" v-on="listeners">
    <slot />
  </h3>
</template>

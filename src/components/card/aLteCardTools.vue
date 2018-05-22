<template functional>
  <div v-bind="data.attrs" class="card-tools" v-on="listeners">
    <slot />
  </div>
</template>

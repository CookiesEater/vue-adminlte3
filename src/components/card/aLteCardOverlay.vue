<template functional>
  <div v-bind="data.attrs" class="overlay d-flex justify-content-center align-items-center" v-on="listeners">
    <slot />
  </div>
</template>

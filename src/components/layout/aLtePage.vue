<template functional>
  <div v-bind="data.attrs" class="wrapper" v-on="listeners">
    <slot />
  </div>
</template>

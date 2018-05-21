<template functional>
  <div v-bind="data.attrs" class="content-wrapper" v-on="listeners">
    <div class="content-header">
      <slot name="header" />
    </div>
    <section class="content">
      <slot />
    </section>
  </div>
</template>

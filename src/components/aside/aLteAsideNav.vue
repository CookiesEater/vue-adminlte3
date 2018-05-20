<template functional>
  <nav v-bind="data.attrs" v-on="listeners">
    <ul class="nav nav-sidebar nav-pills flex-column">
      <slot />
    </ul>
  </nav>
</template>

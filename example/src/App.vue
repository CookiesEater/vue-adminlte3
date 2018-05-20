<template>
  <transition :duration="300" name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<style lang="scss" src="@/assets/scss/main.scss"></style>

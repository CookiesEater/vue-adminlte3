<template>
  <!-- Yes, we need div this to correct work <transition> -->
  <div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

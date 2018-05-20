<template>
  <div>
    <transition :duration="300" name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

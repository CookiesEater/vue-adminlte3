<template>
  <div class="wrapper">
    <app-header />
    <app-aside />

    <div class="content-wrapper">
      <div class="content-header">
        <b-container fluid>
          <b-row class="mb-2">
            <b-col sm="6">
              <h1 class="m-0 text-dark">**Title**</h1>
            </b-col>
            <b-col sm="6">
              **Breadcrumbs**
            </b-col>
          </b-row>
        </b-container>
      </div>

      <section class="content">
        <b-container fluid>
          <b-row>
            <b-col>
              <transition :duration="300" name="fade" mode="out-in">
                <router-view />
              </transition>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppAside from '@/components/AppAside.vue';

export default {
  components: {
    AppHeader,
    AppAside,
  },
};
</script>

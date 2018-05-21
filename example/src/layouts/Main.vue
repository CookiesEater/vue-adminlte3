<template>
  <a-lte-page>
    <app-header />
    <app-aside />

    <a-lte-content>
      <b-container slot="header" fluid>
        <b-row class="mb-2">
          <b-col sm="6">
            <h1 class="m-0 text-dark">{{ title }}</h1>
          </b-col>
          <b-col sm="6" class="d-flex justify-content-end">
            <a-lte-breadcrumbs :list="breadcrumbs" transition="breadcrumbs" />
          </b-col>
        </b-row>
      </b-container>

      <b-container fluid>
        <b-row>
          <b-col>
            <transition :duration="300" name="fade" mode="out-in">
              <router-view />
            </transition>
          </b-col>
        </b-row>
      </b-container>
    </a-lte-content>

    <app-footer />
  </a-lte-page>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppAside from '@/components/AppAside.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppAside,
  },
  computed: {
    title() {
      let title = '';
      if (this.$route.meta && this.$route.meta.label) {
        title = this.$route.meta.label;
      }
      if (this.$route.name) {
        title = this.$route.name;
      }
      return title;
    },
    breadcrumbs() {
      return this.$route.matched;
    },
  },
};
</script>

<style>
.breadcrumb-item {
  transition: all 0.3s;
  white-space: nowrap;
}
.breadcrumbs-enter,
.breadcrumbs-leave-to {
  opacity: 0;
}
.breadcrumbs-leave-active {
  position: absolute;
}
</style>

<template>
  <div class="sidebar-mini sidebar-open">
    <div class="wrapper">
      <app-aside />

      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">**Title**</h1>
              </div>
              <div class="col-sm-6">
                **Breadcrumbs**
              </div>
            </div>
          </div>
        </div>

        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <transition :duration="300" name="fade" mode="out-in">
                  <router-view />
                </transition>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import AppAside from '@/components/AppAside.vue';

export default {
  components: {
    AppAside,
  },
};
</script>

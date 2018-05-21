<template>
  <a-lte-footer>
    <strong>Copyright © 2018.</strong> All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <strong>Version:</strong> {{ version }}
    </div>
  </a-lte-footer>
</template>

<script>
import npmPackage from '@/../../package.json';

export default {
  data() {
    return {
      version: npmPackage.version,
    };
  },
};
</script>

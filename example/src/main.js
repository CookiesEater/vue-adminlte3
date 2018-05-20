import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueAdminLte from 'AdminLTE';
import '@/plugins/icons';
import App from '@/App.vue';
import router from '@/router';

Vue.use(BootstrapVue);
Vue.use(VueAdminLte);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: createElement => createElement(App),
});

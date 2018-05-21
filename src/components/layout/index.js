import aLteContent from './aLteContent.vue';
import aLteFooter from './aLteFooter.vue';
import aLteHeader from './aLteHeader.vue';
import aLteLayoutPage from './aLteLayoutPage.vue';
import aLteLayoutLogin from './aLteLayoutLogin.vue';

const components = {
  aLteContent,
  aLteFooter,
  aLteHeader,
  aLteLayoutPage,
  aLteLayoutLogin,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;

import aLteContent from './aLteContent.vue';
import aLteFooter from './aLteFooter.vue';
import aLteHeader from './aLteHeader.vue';
import aLtePage from './aLtePage.vue';

const components = {
  aLteContent,
  aLteFooter,
  aLteHeader,
  aLtePage,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;

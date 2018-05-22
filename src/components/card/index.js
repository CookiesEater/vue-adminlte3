import aLteCardOverlay from './aLteCardOverlay.vue';
import aLteCardTitle from './aLteCardTitle.vue';
import aLteCardTools from './aLteCardTools.vue';

const components = {
  aLteCardOverlay,
  aLteCardTitle,
  aLteCardTools,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;

import aLteInfoBox from './aLteInfoBox.vue';

const components = {
  aLteInfoBox,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;

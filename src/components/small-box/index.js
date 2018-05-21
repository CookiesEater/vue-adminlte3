import aLteSmallBox from './aLteSmallBox.vue';

const components = {
  aLteSmallBox,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;

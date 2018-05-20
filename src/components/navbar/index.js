import aLteNavbar from './aLteNavbar.vue';

const components = {
  aLteNavbar,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;

import aLteBreadcrumbs from './aLteBreadcrumbs.vue';

const components = {
  aLteBreadcrumbs,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;

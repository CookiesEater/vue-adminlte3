import components from './components';

const defaults = {
  iconComponent: 'font-awesome-icon',
};

const VuePlugin = {
  install(Vue, options) {
    const opt = Object.assign(defaults, options);

    Vue.component('a-lte-icon', {
      functional: true,
      render: (createElement, context) => createElement(opt.iconComponent, context.data, context.children),
    });

    Object.keys(components).forEach((plugin) => {
      Vue.use(components[plugin]);
    });
  },
};

export default VuePlugin;

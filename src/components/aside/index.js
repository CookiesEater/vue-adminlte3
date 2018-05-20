import aLteAside from './aLteAside.vue';
import aLteAsideBrand from './aLteAsideBrand.vue';
import aLteAsideContainer from './aLteAsideContainer.vue';
import aLteAsideNav from './aLteAsideNav.vue';
import aLteAsideNavItem from './aLteAsideNavItem.vue';
import aLteAsideNavItemDropdown from './aLteAsideNavItemDropdown.vue';
import aLteAsideUser from './aLteAsideUser.vue';
import directives from './directives';

const components = {
  aLteAside,
  aLteAsideBrand,
  aLteAsideContainer,
  aLteAsideNav,
  aLteAsideNavItem,
  aLteAsideNavItemDropdown,
  aLteAsideUser,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });

    Object.keys(directives).forEach((directive) => {
      Vue.directive(directive, directives[directive]);
    });
  },
};

export default VuePlugin;

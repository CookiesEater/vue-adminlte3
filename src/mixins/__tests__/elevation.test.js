import { shallowMount, createLocalVue } from '@vue/test-utils';
import elevation from '../elevation';

const Test = {
  mixins: [elevation()],
  render(createElement) {
    return createElement('div', { class: [this.elevationClass] });
  },
};

describe('elevation', () => {
  const createWrapper = options =>
    shallowMount(Test, {
      localVue: createLocalVue(),
      ...options,
    });

  it('elevation is a function', () => {
    expect(typeof elevation === 'function').toBeTruthy();
  });

  it('elevation has prop default value', () => {
    const mixin = elevation();

    expect(mixin.props.elevation).toBeDefined();
    expect(mixin.props.elevation.default).toBe(2);
  });

  it('elevation has computed method', () => {
    const mixin = elevation();

    expect(typeof mixin.computed.elevationClass === 'function').toBeDefined();
  });

  it('has elevation', () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.$el.className.indexOf('elevation') === 0).toBeTruthy();
    wrapper.setProps({
      elevation: 4,
    });
    expect(wrapper.vm.$el.className).toBe('elevation-4');
  });
});

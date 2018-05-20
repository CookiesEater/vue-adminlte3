import { shallowMount, createLocalVue } from '@vue/test-utils';
import elevation from '../elevation';

const Test = {
  mixins: [elevation],
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

  it('has elevation', () => {
    const wrapper = createWrapper();

    expect(wrapper.vm.$el.className.indexOf('elevation') === 0).toBeTruthy();
    wrapper.setProps({
      elevation: 4,
    });
    expect(wrapper.vm.$el.className).toBe('elevation-4');
  });
});

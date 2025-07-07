import { describe, it, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import Header from '../Header.vue';

describe('Header', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.find('h2').text()).toContain('James Thompson');
    expect(wrapper.find('h3').text()).toContain('Engineering Leader & Software Developer');
  })
})

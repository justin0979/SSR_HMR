import React from 'react';
import { shallow } from 'enzyme';
import '@src/setupTests';
import { HomePage } from '@components/HomePage';

describe('<HomePage />', () => {
  /**
   * Factory function to create ShallowWrapper for HomePage Component.
   * @function setup
   * @param {object} props - Component props specific to this setup
   * @param {object} state - Initial state for setup
   * @returns {ShallowWrapper}
   */
  const setup = (props = {}, state = null) => {
    const wrapper = shallow(<HomePage {...props} />);

    if (state) wrapper.setState(state);

    return wrapper;
  };

  /**
   * Return ShallowWrapper containing node(s) with the given data-test value
   * @function findByTestAttr
   * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
   * @param {string} val - Value of data-test attribute for search
   * @returns {ShallowWrapper}
   */
  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
  };

  test('should render without crashing', () => {
    const wrapper = setup();
    const HomePageComp = findByTestAttr(wrapper, 'homepage-component');
    expect(HomePageComp.length).toBe(1);
  });

  test('should have counter with initial value of 0', () => {
    const wrapper = setup();
    const initialValue = wrapper.state('counter');
    expect(initialValue).toBe(0);
  });

  test('should have increment button', () => {
    const wrapper = setup();
    const incrBtn = findByTestAttr(wrapper, 'increment-button');
    expect(incrBtn.length).toBe(1);
  });

  test('should have decrement button', () => {
    const wrapper = setup();
    const decrBtn = findByTestAttr(wrapper, 'decrement-button');
    expect(decrBtn.length).toBe(1);
  });

  test('should have dispay of counter value', () => {
    const wrapper = setup();
    const displayCounter = findByTestAttr(wrapper, 'display-counter');
    expect(displayCounter.length).toBe(1);
  });

  test('should increment counter by one when clicked', () => {
    const counter = 2;
    const wrapper = setup(null, { counter });

    const incrBtn = findByTestAttr(wrapper, 'increment-button');
    incrBtn.simulate('click');

    const counterDisplay = findByTestAttr(wrapper, 'display-counter');
    expect(counterDisplay.text()).toContain(counter + 1);
  });

  test('should decrease counter by one when clicked', () => {
    const counter = 100;
    const wraper = setup(null, { counter: counter });

    const decrBtn = findByTestAttr(wraper, 'decrement-button');
    decrBtn.simulate('click');

    const displayCounter = findByTestAttr(wraper, 'display-counter');
    expect(displayCounter.text()).toContain(counter - 1);
  });

  test('should output message if counter tries to be negative', () => {
    const counter = 0;
    const wrapper = setup(null, { counter: counter });

    const decrBtn = findByTestAttr(wrapper, 'decrement-button');
    decrBtn.simulate('click');

    const errorMsg = findByTestAttr(wrapper, 'display-counter');
    expect(errorMsg.text()).toContain('Cannot go below zero');
  });

  test('should not allow counter to be negative', () => {
    const counter = 1;
    let attempts = 0;
    const wrapper = setup(null, { counter });

    let decrBtn = findByTestAttr(wrapper, 'decrement-button');
    while (attempts++ < 10) {
      decrBtn = findByTestAttr(wrapper, 'decrement-button');
      decrBtn.simulate('click');
    }

    expect(wrapper.state('counter')).toBe(0);
  });

  test('should remove error message when incremented', () => {
    const wrapper = setup(null, { counter: 0 });
    const incrBtn = findByTestAttr(wrapper, 'increment-button');
    const decrBtn = findByTestAttr(wrapper, 'decrement-button');

    decrBtn.simulate('click');
    incrBtn.simulate('click');

    const displayCounter = findByTestAttr(wrapper, 'display-counter');
    expect(displayCounter.text()).toContain('Stay Positive');
  });
});

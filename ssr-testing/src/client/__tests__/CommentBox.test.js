import React from 'react';
import { mount } from 'enzyme';
import '#src/setupTests.js';
import CommentBox from '#components/CommentBox';

describe('<CommentBox />', () => {
  let wrapper;

  beforeEach(() => (wrapper = mount(<CommentBox />)));

  afterEach(() => wrapper.unmount());

  it('has a text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });
});

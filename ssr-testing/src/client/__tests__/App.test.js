import React from 'react';
import { shallow } from 'enzyme';
import '#src/setupTests';
import App from '#client/App';
import CommentBox from '#components/CommentBox';

describe('App component', () => {
  it('shows a comment box', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1);
  });
});

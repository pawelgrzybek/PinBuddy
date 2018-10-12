import React from 'react';
import { shallow } from 'enzyme';

import { All } from '../All';

describe('<All />', () => {

  const defaultProps = {
    posts: [],
    postsGet: jest.fn(),
  };

  it('should render correctly', () => {
    const tree = shallow(
      <All
        {...defaultProps}
      />
    );
    expect(tree).toMatchSnapshot();
  });

});

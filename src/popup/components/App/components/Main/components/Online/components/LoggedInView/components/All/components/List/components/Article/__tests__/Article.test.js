import React from 'react';
import { shallow } from 'enzyme';

import { Article } from '../Article';

describe('<Article />', () => {

  const defaultProps = {
    privatePost: true,
    unread: true,
    href: '',
    description: '',
    extended: '',
    time: '',
    tags: '',
    postsDelete: jest.fn(),
  };

  it('should render correctly', () => {
    const tree = shallow(
      <Article
        {...defaultProps}
      />
    );
    expect(tree).toMatchSnapshot();
  });

});

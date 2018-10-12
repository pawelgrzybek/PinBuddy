import React from 'react';
import { shallow } from 'enzyme';

import Filters from '../Filters';

describe('<Filters />', () => {

  const defaultProps = {
    privatePost: true,
    publicPost: true,
    unread: true,
    untagged: true,
    updateKeyword: jest.fn(),
    updatePrivatePost: jest.fn(),
    updatePublicPost: jest.fn(),
    updateUnread: jest.fn(),
    updateUntagged: jest.fn(),
  };

  it('should render correctly', () => {
    const tree = shallow(
      <Filters
        {...defaultProps}
      />
    );
    expect(tree).toMatchSnapshot();
  });

});

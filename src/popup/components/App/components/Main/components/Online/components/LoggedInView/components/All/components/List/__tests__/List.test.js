import React from 'react';
import { shallow } from 'enzyme';

import List from '../List';

describe('<List />', () => {

  const defaultProps = {
    posts: [],
    filters: {
      keyword: '',
      unread: true,
      untagged: true,
      privatePost: true,
      publicPost: true,
    },
  };

  it('should render correctly', () => {
    const tree = shallow(
      <List
        {...defaultProps}
      />
    );
    expect(tree).toMatchSnapshot();
  });

});

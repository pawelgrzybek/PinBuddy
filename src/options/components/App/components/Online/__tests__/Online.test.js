import React from 'react';
import { shallow } from 'enzyme';

import { Online } from '../Online';

describe('<Online />', () => {

  const defaultProps = {
    username: 'pibuddy',
  };

  it('should render correctly', () => {
    const tree = shallow(
      <Online
        {...defaultProps}
      />
    );
    expect(tree).toMatchSnapshot();
  });

});

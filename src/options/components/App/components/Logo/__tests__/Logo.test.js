import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from '../Logo';

describe('<Logo />', () => {

  const defaultProps = {
    username: 'pibuddy',
    online: true,
  };

  it('should render correctly', () => {
    const tree = shallow(
      <Logo
        {...defaultProps}
      />
    );
    expect(tree).toMatchSnapshot();
  });

});

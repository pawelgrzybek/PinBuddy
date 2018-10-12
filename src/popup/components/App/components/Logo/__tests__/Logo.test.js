import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from '../Logo';

describe('<Logo />', () => {

  const defaultProps = {
    username: 'pinbuddy',
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

  it('should not render when username is falsy', () => {
    const tree = shallow(
      <Logo
        {...defaultProps}
        username=""
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should not render when online is falsy', () => {
    const tree = shallow(
      <Logo
        {...defaultProps}
        online={false}
      />
    );
    expect(tree).toMatchSnapshot();
  });

});

import React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../Login';

describe('<Login />', () => {

  const defaultProps = {
    loading: false,
    error: false,
    userLogIn: jest.fn(),
  };

  it('should render correctly', () => {
    const tree = shallow(
      <Login
        {...defaultProps}
      />
    );
    expect(tree).toMatchSnapshot();
  });

});

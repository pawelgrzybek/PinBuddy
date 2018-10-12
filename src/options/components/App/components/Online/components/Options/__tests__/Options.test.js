import React from 'react';
import { shallow } from 'enzyme';

import { Options } from '../Options';

describe('<Options />', () => {

  const defaultProps = {
    username: 'pinbuddy',
    options: {
      defaultView: 'all',
      privateCheckboxByDefault: false,
      toReadChecboxByDefault: false,
      enableSystemNotifications: false,
    },
    userLogOut: jest.fn(),
    fetchOptions: jest.fn(),
    optionsUpdate: jest.fn(),
  };

  it('should render correctly', () => {
    const tree = shallow(
      <Options
        {...defaultProps}
      />
    );
    expect(tree).toMatchSnapshot();
  });

});

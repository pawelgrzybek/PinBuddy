import React from 'react';
import { shallow } from 'enzyme';

import { Online } from '../Online';
import LoggedInView from '../components/LoggedInView';
import LoggedOutView from '../components/LoggedOutView';

describe('<Online />', () => {

  const defaultProps = {
    username: 'pinbuddy',
    token: 'pinbuddy',
  };

  it('should render correctly', () => {
    const tree = shallow(
      <Online
        {...defaultProps}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render Online view when online', () => {
    const tree = shallow(
      <Online
        {...defaultProps}
      />
    );
    expect(tree.contains(<LoggedInView />)).toBeTruthy();
  });

  it('should render Offline view when offline', () => {
    const tree = shallow(
      <Online
        {...defaultProps}
        username=""
        token=""
      />
    );
    expect(tree.contains(<LoggedOutView />)).toBeTruthy();
  });

});

import React from 'react';
import { shallow } from 'enzyme';

import Offline from '../Offline';

describe('<Offline />', () => {

  it('should render correctly', () => {
    const tree = shallow(
      <Offline />
    );
    expect(tree).toMatchSnapshot();
  });

});

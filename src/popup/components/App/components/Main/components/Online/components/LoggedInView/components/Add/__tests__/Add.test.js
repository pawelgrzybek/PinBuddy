import React from 'react';
import { shallow } from 'enzyme';

import Add from '../Add';

describe('<Add />', () => {

  it('should render correctly', () => {
    const tree = shallow(
      <Add />
    );
    expect(tree).toMatchSnapshot();
  });

});

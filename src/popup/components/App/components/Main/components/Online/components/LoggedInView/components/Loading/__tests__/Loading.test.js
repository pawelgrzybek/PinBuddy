import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../Loading';

describe('<Loading />', () => {

  it('should render correctly', () => {
    const tree = shallow(
      <Loading />
    );
    expect(tree).toMatchSnapshot();
  });

});

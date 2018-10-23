import React from "react";
import { shallow } from "enzyme";

import { Main } from "../Main";
import Online from "../components/Online";
import Offline from "../components/Offline";

describe("<Main />", () => {
  const defaultProps = {
    online: true
  };

  it("should render correctly", () => {
    const tree = shallow(<Main {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });

  it("should render Online view when online", () => {
    const tree = shallow(<Main {...defaultProps} />);
    expect(tree.contains(<Online />)).toBeTruthy();
  });

  it("should render Offline view when offline", () => {
    const tree = shallow(<Main {...defaultProps} online={false} />);
    expect(tree.contains(<Offline />)).toBeTruthy();
  });
});

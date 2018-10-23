import React from "react";
import { shallow } from "enzyme";

import LoggedOutView from "../LoggedOutView";

describe("<LoggedOutView />", () => {
  it("should render correctly", () => {
    const tree = shallow(<LoggedOutView />);
    expect(tree).toMatchSnapshot();
  });
});

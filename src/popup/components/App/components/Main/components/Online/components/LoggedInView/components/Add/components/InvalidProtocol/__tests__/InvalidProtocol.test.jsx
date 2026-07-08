import React from "react";
import { shallow } from "enzyme";

import InvalidProtocol from "../InvalidProtocol";

describe("<InvalidProtocol />", () => {
  it("should render correctly", () => {
    const tree = shallow(<InvalidProtocol />);
    expect(tree).toMatchSnapshot();
  });
});

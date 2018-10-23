import React from "react";
import { shallow } from "enzyme";

import { App } from "../App";

describe("<App />", () => {
  const defaultProps = {
    getUserInfo: jest.fn(),
    checkConnection: jest.fn(),
    wentOnline: jest.fn(),
    wentOffline: jest.fn()
  };

  it("should render correctly", () => {
    const tree = shallow(<App {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});

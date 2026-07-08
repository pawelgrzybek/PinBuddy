import React from "react";
import { shallow } from "enzyme";

import { App } from "../App";

describe("<App />", () => {
  const defaultProps = {
    getUserInfo: vi.fn(),
    checkConnection: vi.fn(),
    wentOnline: vi.fn(),
    wentOffline: vi.fn()
  };

  it("should render correctly", () => {
    const tree = shallow(<App {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});

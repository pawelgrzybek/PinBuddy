import React from "react";
import { shallow } from "enzyme";

import { Nav } from "../Nav";

describe("<Nav />", () => {
  const defaultProps = {
    username: "pinbuddy",
    online: true,
    view: "all",
    error: false,
    updateView: vi.fn(),
    getInitialView: vi.fn()
  };

  it("should render correctly", () => {
    const tree = shallow(<Nav {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});

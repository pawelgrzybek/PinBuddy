import React from "react";
import { shallow } from "enzyme";

import { Options } from "../Options";

describe("<Options />", () => {
  const defaultProps = {
    username: "pinbuddy",
    options: {
      defaultView: "all",
      privateCheckboxByDefault: false,
      toReadChecboxByDefault: false,
      enableSystemNotifications: false
    },
    userLogOut: vi.fn(),
    fetchOptions: vi.fn(),
    optionsUpdate: vi.fn()
  };

  it("should render correctly", () => {
    const tree = shallow(<Options {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});

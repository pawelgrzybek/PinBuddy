import React from "react";
import { shallow } from "enzyme";

import { LoggedInView } from "../LoggedInView";

describe("<LoggedInView />", () => {
  const defaultProps = {
    loading: false,
    error: false,
    view: "all"
  };

  it("should render correctly", () => {
    const tree = shallow(<LoggedInView {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});

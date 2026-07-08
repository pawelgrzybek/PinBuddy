import React from "react";
import { shallow } from "enzyme";

import { Form } from "../Form";

describe("<Form />", () => {
  const defaultProps = {
    postsAdd: vi.fn()
  };

  it("should render correctly", () => {
    const tree = shallow(<Form {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});

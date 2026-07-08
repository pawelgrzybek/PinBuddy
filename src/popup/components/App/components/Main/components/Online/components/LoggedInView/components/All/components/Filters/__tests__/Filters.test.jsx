import React from "react";
import { shallow } from "enzyme";

import Filters from "../Filters";

describe("<Filters />", () => {
  const defaultProps = {
    privatePost: true,
    publicPost: true,
    unread: true,
    untagged: true,
    updateKeyword: vi.fn(),
    updatePrivatePost: vi.fn(),
    updatePublicPost: vi.fn(),
    updateUnread: vi.fn(),
    updateUntagged: vi.fn()
  };

  it("should render correctly", () => {
    const tree = shallow(<Filters {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});

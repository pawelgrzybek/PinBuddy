import React from "react";
import { shallow } from "enzyme";

import { App } from "../App";
import Online from "../components/Online";
import Offline from "../components/Offline";

describe("<App />", () => {
  const defaultProps = {
    online: true,
    userFetchFromChromeStorage: vi.fn(),
    checkConnection: vi.fn(),
    wentOnline: vi.fn(),
    wentOffline: vi.fn()
  };

  it("should render correctly", () => {
    const tree = shallow(<App {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });

  it("should render Online view when online", () => {
    const tree = shallow(<App {...defaultProps} />);
    expect(tree.contains(<Online />)).toBeTruthy();
  });

  it("should render Offline view when offline", () => {
    const tree = shallow(<App {...defaultProps} online={false} />);
    expect(tree.contains(<Offline />)).toBeTruthy();
  });
});

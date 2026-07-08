import { vi } from "vitest";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// adapter config
Enzyme.configure({ adapter: new Adapter() });

// mock global chrome
global.chrome = {
  i18n: {
    getMessage: vi.fn(translationKey => translationKey)
  },
  tabs: {
    query: vi.fn()
  }
};

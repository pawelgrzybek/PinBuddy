import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// adapter config
Enzyme.configure({ adapter: new Adapter() });

// mock global chrome
global.chrome = {
  i18n: {
    getMessage: jest.fn(translationKey => translationKey),
  },
};

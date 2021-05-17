import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import 'jsdom-global/register';
import 'regenerator-runtime/runtime';

configure({ adapter: new Adapter() });

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

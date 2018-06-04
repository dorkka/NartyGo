import React from 'react';
import { render } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../App';
import appStore from '../store/configureStore';

test('renders without crashing', () => {
  const wrapper = render(<Provider store={appStore}><App /></Provider>);
  expect(wrapper).toMatchSnapshot();
});

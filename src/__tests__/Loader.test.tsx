import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '../components';

test('Loader matches snapshot', () => {
  const { asFragment } = render(<Loader />);
  expect(asFragment()).toMatchSnapshot();
});

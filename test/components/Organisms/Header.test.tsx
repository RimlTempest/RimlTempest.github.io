import React from 'react';
import { render } from '../../testUtils';
import { Header } from '../../../src/components/Organisms/Header';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});
it('should render correctly', () => {
  const component = render(<Header />);
  expect(component).toMatchSnapshot();
});

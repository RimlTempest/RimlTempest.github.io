import React from 'react';
import { render } from '../testUtils';
import About from '../../src/pages/about/index';

describe('Aboutページのテスト', () => {
  describe('スナップショットと合致するか', () => {
    test('snapshot', () => {
      const { asFragment } = render(<About />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

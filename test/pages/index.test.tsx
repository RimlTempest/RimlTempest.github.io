import React from 'react';
import { render } from '../testUtils';
import Index from '../../src/pages/index';

// const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('トップページのテスト', () => {
  describe('スナップショットと合致するか', () => {
    test('snapshot', () => {
      const { asFragment } = render(<Index />);
      // 検証 assert
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('ニックネームが正常に表示されているか', () => {
    test('nickname', () => {
      const { container } = render(<Index />);
      expect(container.innerHTML).toMatch('Riml');
    });
  });
  describe('名前が正常に表示されているか', () => {
    test('fullname', () => {
      const { container } = render(<Index />);
      expect(container.innerHTML).toMatch('Daiki Takahashi');
    });
  });
});

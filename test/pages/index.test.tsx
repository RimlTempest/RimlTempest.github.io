import React from 'react';
import { render, fireEvent } from '../testUtils';
import Index from '../../src/pages/index';

// 参考
// https://zenn.dev/erukiti/articles/unit-testing-react-2021

describe('IndexPage Test', () => {
  // DOM 構造のスナップショットをとって、変化したらエラーになるタイプのテスト
  it('Matches: Snapshot(DOM構造TEST)', () => {
    const { asFragment } = render(<Index />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  // Rimlという文字がちゃんと含まれているか
  test('Matching: Rimlが含まれているか', () => {
    const { container } = render(<Index />);
    expect(container.innerHTML).toMatch('Riml');
  });
  // Daiki Takahashiという文字がちゃんと含まれているか
  test('Matching: Daiki Takahashiが含まれているか', () => {
    const { container } = render(<Index />);
    expect(container.innerHTML).toMatch('Daiki Takahashi');
  });

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<Index />, {});
  //   window.alert = jest.fn();
  //   // fireEvent.click(getByText('Test Button'));
  //   console.log(getByText);
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
  // });
});

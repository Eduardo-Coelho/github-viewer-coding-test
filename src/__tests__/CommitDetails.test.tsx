import React from 'react';
import { render } from '@testing-library/react';
import { CommitDetails } from '../components';

test('CommitDetails matches snapshot', () => {
  const mockCommit = {
    commit: {
      author: { name: 'John Doe' },
      committer: { date: '2023-05-21T12:34:56Z' },
      message: 'Initial commit',
      url: 'http://example.com/commit/1',
    },
  };

  const { asFragment } = render(<CommitDetails commit={mockCommit as any} />);
  expect(asFragment()).toMatchSnapshot();
});

test('CommitDetails matches snapshot when commit is null', () => {
  const { asFragment } = render(<CommitDetails commit={null} />);
  expect(asFragment()).toMatchSnapshot();
});

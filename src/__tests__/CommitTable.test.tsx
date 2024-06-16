import React from 'react';
import { render } from '@testing-library/react';
import { CommitTable } from '../components';

test('CommitTable matches snapshot', () => {
  const mockCommits = [
    {
      sha: '123abc',
      commit: {
        message: 'Initial commit',
        author: {
          name: 'John Doe',
          email: 'john@example.com',
          date: '2023-05-21T12:34:56Z',
        },
        committer: {
          name: 'Jane Doe',
          email: 'jane@example.com',
          date: '2023-05-21T12:34:56Z',
        },
        url: 'http://example.com/commit/123abc',
      },
    },
    {
      sha: '456def',
      commit: {
        message: 'Second commit',
        author: {
          name: 'Alice',
          email: 'alice@example.com',
          date: '2020-05-22T12:34:56Z',
        },
        committer: {
          name: 'Bob',
          email: 'bob@example.com',
          date: '2021-05-22T12:34:56Z',
        },
        url: 'http://example.com/commit/456def',
      },
    },
  ];

  const mockOnSelectCommit = jest.fn();

  const { asFragment } = render(
    <CommitTable
      commits={mockCommits as any}
      onSelectCommit={mockOnSelectCommit}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('CommitTable matches snapshot with empty commits list', () => {
  const { asFragment } = render(
    <CommitTable commits={[]} onSelectCommit={() => {}} />,
  );
  expect(asFragment()).toMatchSnapshot();
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RepoSearch } from '../components';

test('RepoSearch matches snapshot', () => {
  const { asFragment } = render(<RepoSearch onSubmit={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

test('RepoSearch form submission calls onSubmit with owner and repo', () => {
  const handleSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <RepoSearch onSubmit={handleSubmit} />,
  );

  const ownerInput = getByPlaceholderText('GitHub Owner');
  const repoInput = getByPlaceholderText('GitHub Repo');
  const submitButton = getByText('Search');

  fireEvent.change(ownerInput, { target: { value: 'facebook' } });
  fireEvent.change(repoInput, { target: { value: 'react' } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith('facebook', 'react');
});

test('RepoSearch form submission is disabled if inputs are empty', () => {
  const handleSubmit = jest.fn();
  const { getByText } = render(<RepoSearch onSubmit={handleSubmit} />);

  const submitButton = getByText('Search');
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
});

test('RepoSearch form inputs update correctly', () => {
  const { getByPlaceholderText } = render(<RepoSearch onSubmit={() => {}} />);

  const ownerInput: any = getByPlaceholderText('GitHub Owner');
  const repoInput: any = getByPlaceholderText('GitHub Repo');

  fireEvent.change(ownerInput, { target: { value: 'microsoft' } });
  fireEvent.change(repoInput, { target: { value: 'vscode' } });

  expect(ownerInput.value).toBe('microsoft');
  expect(repoInput.value).toBe('vscode');
});

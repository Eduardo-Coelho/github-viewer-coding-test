import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from '../components';

test('Modal matches snapshot when open', () => {
  const { asFragment } = render(
    <Modal isOpen={true} onClose={() => {}}>
      <div>Modal Content</div>
    </Modal>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Modal matches snapshot when closed', () => {
  const { asFragment } = render(
    <Modal isOpen={false} onClose={() => {}}>
      <div>Modal Content</div>
    </Modal>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Modal calls onClose when Escape key is pressed', () => {
  const handleClose = jest.fn();
  render(
    <Modal isOpen={true} onClose={handleClose}>
      <div>Modal Content</div>
    </Modal>,
  );

  fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
  expect(handleClose).toHaveBeenCalledWith(true);
});

test('Modal calls onClose when Close button is clicked', () => {
  const handleClose = jest.fn();
  const { getByText } = render(
    <Modal isOpen={true} onClose={handleClose}>
      <div>Modal Content</div>
    </Modal>,
  );

  fireEvent.click(getByText('Close'));
  expect(handleClose).toHaveBeenCalledWith(true);
});

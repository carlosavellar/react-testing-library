import React from 'react';
import Form from './Form';
import { screen, render } from '@testing-library/react';

test('Testing length form elements', () => {
  render(<Form onAddUser={() => console.log('e')} />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

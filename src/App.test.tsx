import React from 'react';
import { render, screen } from '@testing-library/react';
import users from '@testing-library/user-event';
import App from './App';
import FormUsers from './components/Form';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Testing Library/i);
  expect(linkElement).toBeInTheDocument();
});

test('Testing adding a new user', () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const id = screen.getByRole('checkbox', { name: /isRegistered/i });

  const button = screen.getByRole('button');

  users.click(nameInput);
  users.keyboard('Jane');
  users.click(emailInput);
  users.keyboard('jane@jane.com');
  // users.click(registeredInput);
  // users.keyboard('');

  // screen.debug();
  users.click(button);

  const uName = screen.getByRole('cell', { name: 'Jane' });
  const uEmail = screen.getByRole('cell', { name: 'jane@jane.com' });

  expect(uName).toBeInTheDocument();
  expect(uEmail).toBeInTheDocument();
});

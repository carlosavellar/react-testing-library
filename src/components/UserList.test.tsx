import React from 'react';
import { screen, render, getAllByRole, within } from '@testing-library/react';
import UserList from './UserList';
import { IUser } from '../Interface/IUser';

const renderComponent = () => {
  const users: Array<IUser> = [
    {
      name: 'Madonna',
      email: 'madonna@dona.com',
      isRegistered: true,
      id: 2,
    },
    {
      name: 'Zulu',
      email: 'zulua@dona.com',
      isRegistered: true,
      id: 3,
    },
  ];
  render(<UserList users={users} />);
  return { users };
};

test('Test amount of rows', () => {
  renderComponent();
  screen.logTestingPlaygroundURL();

  // const rows = screen.getAllByRole('row');
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
  console.log(rows);
});

test('Testing table content', () => {
  const { users } = renderComponent();

  for (const user of users) {
    const uName = screen.getByRole('cell', { name: user.name });
    const uEmail = screen.getByRole('cell', { name: user.email });

    expect(uName).toBeInTheDocument();
    expect(uEmail).toBeInTheDocument();
  }
});

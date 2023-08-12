import React from 'react';
import { screen, render, getAllByRole, within } from '@testing-library/react';
import UserList from './UserList';
import { IUser } from '../Interface/IUser';

test('Test amount of rows', () => {
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

  screen.logTestingPlaygroundURL();

  // const rows = screen.getAllByRole('row');
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
  console.log(rows);
});

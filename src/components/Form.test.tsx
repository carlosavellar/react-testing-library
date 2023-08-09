import React from 'react';
import Form from './Form';
import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { IUser } from '../Interface/IUser';

test('Testing length form elements', () => {
  render(<Form onAddUser={() => console.log('e')} />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('Testing user inputs', () => {
  const argList: Array<IUser> = [];
  const callBack = (users: IUser) => {
    argList.push(users);
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(<Form onAddUser={callBack} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  user.click(nameInput);
  user.keyboard('Deusa Athena');

  user.click(emailInput);
  user.keyboard('athena@gmail.com');

  const button = screen.getByRole('button');
  user.click(button);

  expect(argList).toHaveLength(1);
  expect(argList).toEqual({
    name: 'Deusa Athena',
    email: 'athena@gmail.com',
  });
});

import React from 'react';
import { Label, List, Table } from 'semantic-ui-react';
import { IUser } from '../Interface/IUser';

interface IUserList {
  users: Array<IUser>;
}

export default function UserList(props: IUserList) {
  const { users } = props;
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Is Registered</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body data-testid="users">
        {users.map((user) => {
          return (
            <Table.Row key={user.id}>
              <Table.Cell>
                <Label ribbon>{user.name}</Label>
              </Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                {user.isRegistered ? 'Is registered' : 'No registerd'}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

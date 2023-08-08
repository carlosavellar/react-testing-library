import React from 'react';
import { List } from 'semantic-ui-react';
import { IUser } from '../Interface/IUser';

interface IUserList {
  users: Array<IUser>;
}

export default function UserList(props: IUserList) {
  const { users } = props;
  console.log(users);
  return (
    <List divided relaxed>
      {users.map((user) => {
        return (
          <List.Item key={user.id}>
            <List.Content>
              <List.Header>{user.name}</List.Header>
              <List.Description>{user.email}</List.Description>
              <List.Description>
                {user.isRegistered ? 'Is registered' : 'No registerd'}
              </List.Description>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
}

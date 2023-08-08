import React, { useState } from 'react';

import FormUsers from './components/Form';
import './App.css';
import { Grid, Image } from 'semantic-ui-react';
import { IUser } from './Interface/IUser';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState<Array<IUser>>([
    { name: 'Dart', email: 'carlos.a@3.com', isRegistered: true, id: '1' },
  ]);

  const handlerAdduser = (user: IUser) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={6}>
            <FormUsers onAddUser={handlerAdduser} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <UserList users={users} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;

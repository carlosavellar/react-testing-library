import React, { useEffect, useState } from 'react';
import { Grid, Image, Button, Checkbox, Form } from 'semantic-ui-react';
import { IUser } from '../Interface/IUser';
import { v4 as uuidv4 } from 'uuid';
interface IFormUsers {
  onAddUser: (user: IUser) => void;
}

const FormUsers = (props: IFormUsers) => {
  const id = uuidv4();
  const { onAddUser } = props;
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const handlerSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    onAddUser({ email, name, isRegistered, id: 1 });
  };

  return (
    <>
      <h2>React Testing Library</h2>
      <Form onSubmit={(e) => handlerSubmit(e)}>
        <Form.Field>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            onChange={() => setIsRegistered(!isRegistered)}
            label="I agree to the Terms and Conditions"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default FormUsers;

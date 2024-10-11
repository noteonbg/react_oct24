// src/UserForm.js
import React, { useState } from 'react';
import { useUser } from './UserContext';

const UserForm = () => {
  const { updateUser } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UserForm;

/*

State Management: This component maintains its local state for the name and email inputs using useState.
handleSubmit Function: This function handles form submission:
It prevents the default form submission behavior.
Calls updateUser (from the context) with the current name and email.
Resets the local state for name and email to empty strings after submission.
Rendering:
The form includes input fields for the user's name and email, along with a submit button. The onChange handlers update the local state as the user types.

*/
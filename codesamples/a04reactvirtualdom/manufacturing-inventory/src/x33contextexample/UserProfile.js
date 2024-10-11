// src/UserProfile.js
import React from 'react';
import { useUser } from './UserContext';

const UserProfile = () => {
  const { user } = useUser();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;

/*

Accessing Context: This component uses the useUser hook to access the current user data from the context.
Rendering:
It displays the user's name and email. If the user data 
is updated (e.g., through the UserForm), this component 
will automatically re-render with the new data.

*/
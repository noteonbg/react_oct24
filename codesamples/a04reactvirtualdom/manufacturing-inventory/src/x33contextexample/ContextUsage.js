// src/App.js
import React from 'react';
import { UserProvider } from './UserContext';
import UserForm from './UserForm';
import UserProfile from './UserProfile';

const ContextUsage = () => {
  return (
    <UserProvider>
      <h1>User Information</h1>
      <UserForm />
      <UserProfile />
    </UserProvider>
  );
};


/*

UserProvider: Wraps the UserForm and UserProfile components, providing them with access to the user context.
Rendering:
Displays a title and includes both the user form for input and the user profile for displaying current 
information.

*/

export default ContextUsage;

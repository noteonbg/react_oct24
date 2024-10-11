// src/UserContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

/*

Context Provider: This part uses the
 UserContext.Provider to make the user state and the updateUser function available 
to any child components that consume this context.
Value Prop: The value prop of the Provider includes both
 user (the current user data) and updateUser 
 (the function to update the user), allowing child components to access and modify the user state.
Children Prop: The children prop allows you to render any
 child components that are wrapped by the UserProvider,
  making them able to access the user context.

*/

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};


/*

createContext(): This function creates a new context object that will hold the user data and the function to update it.
UserProvider:
State: Uses useState to initialize the user state with an object containing name and email, both starting as empty strings.
updateUser function: Accepts a new user object and updates the state with it.
UserContext.Provider: Wraps its children with a provider that makes the user and updateUser available to any component that consumes this context.
useUser Hook: This custom hook simplifies access to the context.
 Instead of using useContext(UserContext) directly in components,
  you can just call useUser().

*/
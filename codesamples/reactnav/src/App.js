// src/App.js
import React, { useState,Suspense,lazy } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from  "react-router-dom"
import Login from './Login';
import Home from './Home';
import PostLogin from './PostLogin';
import ReadNumber from './ReadNumber';
import ReadNumberViaQuery from './ReadNumberViaQuery';
import NotFound from './NotFound';





//npm install react-router-dom@latest

const App = () => {

 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };


  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} username={username} />}
          />
          <Route
            path="/post-login"
            element={
              isLoggedIn ? (
                <PostLogin onLogout={handleLogout} username={username}/>
              ) : (
                <Home />
              )
            }
          />

       
    <Route path="/read-number" element={<ReadNumber username={username}/>} />
    <Route path="/read-number-via-query" element={<ReadNumberViaQuery  username={username}/>} />
    <Route path="*"  element={<Navigate to="/"/>} />
    
    
          
          
        
     
     
        </Routes>

      </div>
    </Router>

    
  );
};



export default App;

/*


In React Router, several key terminologies are important to understand how routing works. Here are the main ones:

1. Router
   - The top-level component that manages routing. The most common type is `BrowserRouter`, which uses the HTML5 history API to keep your UI in sync with the URL.

2. Route
   - Defines a mapping between a URL path and a component. Each `Route` specifies a path and the component that should be rendered when the path is matched.

   javascript
   <Route path="/about" element={<About />} />
   

3. Routes
   - A container that groups multiple `Route` components. It checks the current URL and renders the first child `Route` that matches.

4. Link
   - A component used to create navigable links to different routes. It prevents full page reloads and keeps the app in a single-page application (SPA) context.

   javascript
   <Link to="/about">About</Link>
   

5. NavLink
   - Similar to `Link`, but with additional styling capabilities. It can apply an active style when the link is active (i.e., when the route it points to is currently matched).

6. useNavigate
   - A hook that allows programmatic navigation. It provides a function to navigate to different routes in response to events.

   javascript
   const navigate = useNavigate();
   navigate('/about');
   

7. useLocation
   - A hook that returns the current location object, which contains information about the current URL, including pathname, search, and hash.

8. useParams
   - A hook used to access URL parameters. It allows you to extract values from the URL, typically used in dynamic routes.

   javascript
   const { id } = useParams();
   

9. useRouteMatch
   - A hook that returns information about how a `<Route>` path matches the current URL. 
   It's useful for conditional rendering based on the current route.

10. Redirect
   - A component used to navigate to a different route programmatically.
    This is often used after a user action or if certain conditions are met.

11. Nested Routes
   - Routes that are defined within other routes, allowing for a 
   hierarchical structure. This enables more complex layouts and routes.

12. History
   - An object that keeps track of the browser's session history. The Router interacts with the history to keep the UI in sync with the URL.



*/

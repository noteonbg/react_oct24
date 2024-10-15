import React, { useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from  "react-router-dom"

// Create a context for authentication
const AuthContext = createContext();

// Sample authentication provider
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const login1 = () => setIsAuthenticated(true);
    const logout1 = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login1, logout1 }}>
            {children}
        </AuthContext.Provider>
    );
};

// Protected Route Component
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Routes
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login1"/> 
                )
            }
        />
    );
};

// Sample components
const Home1 = () => <h2>Home Page</h2>;
const Login1 = () => {
    const { login1 } = useContext(AuthContext);
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={login1}>Login</button>
        </div>
    );
};
const Protected = () => <h2>Protected Page</h2>;

// Main App Component
const Pr = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/freak" exact component={Home1} />
                    <Route path="/hello" component={Login1} />
                    <ProtectedRoute path="/protected" component={Protected} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default Pr;

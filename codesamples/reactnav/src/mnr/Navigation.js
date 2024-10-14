import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/products" activeClassName="active">Products</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
}

export default Navigation;

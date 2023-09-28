import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/greeting">Greeting</NavLink>
    </>
  );
}

export default Navigation;

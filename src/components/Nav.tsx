import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="flex flex-col bg-muted">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Nav;

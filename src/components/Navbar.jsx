import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="d-flex justify-content-between p-3 navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <span>Poke Web</span>
      <div className="d-flex gap-3">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink to={"/pokemones"}>Pokemones</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

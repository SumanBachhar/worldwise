import { NavLink } from "react-router-dom";

export const AppNav = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="cities">Cities</NavLink>
          </li>
          <li>
            <NavLink to="countries">Countries</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

import { Link } from "react-router-dom";

export const NavLink = ({ navItem }) => {
  return (
    <li>
      <Link to={navItem.url}>
        <p className="hover:text-purple-500 cursor-pointer">{navItem.label}</p>
      </Link>
    </li>
  );
};

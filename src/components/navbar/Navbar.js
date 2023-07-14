import { NavLink } from "./NavLink.js";
import tittelbilde from "../../images/helloklaracom.png";

function Navbar({ links }) {
  const navItems = [
    { label: "HJEM", url: "/" },
    { label: "CV", url: "/CV" },
    { label: "VENNER", url: "/venner" },
  ];

  return (
    <nav className="flex flex-col gap-5 m-5 text-center">
      <ul className="grid grid-cols-3 text-blue-300 w-screen text-m font-mono">
        {navItems.map((navItem) => (
          <NavLink
            onClick={() => navItem.label}
            key={navItem.label}
            navItem={navItem}
          />
        ))}
      </ul>
      <img src={tittelbilde} alt="tittel" />
    </nav>
  );
}

export default Navbar;

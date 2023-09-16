import { NavLink } from "./NavLink.js";
import helloklara from "../../images/annet/helloklara.png";

function Navbar({ links }) {
  const navItems = [
    { label: "HJEM", url: "/" },
    { label: "VENNER", url: "/venner" },
    { label: "CV", url: "/CV" },
  ];

  return (
    <nav className="flex flex-col gap-1 text-center mt-5">
      <ul className="grid grid-cols-3 text-blue-300 w-screen text-m font-mono">
        {navItems.map((navItem) => (
          <NavLink
            onClick={() => navItem.label}
            key={navItem.label}
            navItem={navItem}
          />
        ))}
      </ul>
      <a href="/">
        <img src={helloklara} alt="tittel" />
      </a>
    </nav>
  );
}

export default Navbar;

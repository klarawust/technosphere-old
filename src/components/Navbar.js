import { NavLink } from "components/NavLink.js";

function Navbar({ links }) {
  const navItems = [
    { label: "Hjem", url: "/" },
    { label: "Prosjekter", url: "/" },
    { label: "Bøker", url: "/" },
    { label: "LinkedIn", url: "/" },
  ];
  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <NavLink key={navItem.label} navItem={navItem} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
